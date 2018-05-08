<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		$hostName = $_SERVER['HTTP_HOST'];
		$apiUrl = 'https://outgrow-api.herokuapp.com';
		if (preg_match("/outgrow\.co\.in$/", $hostName)) {
			$apiUrl = 'https://outgrow-biz-api.herokuapp.com';
		}
		else if (preg_match("/rely\.co$/", $hostName)) {
			$apiUrl = 'https://outgrow-api.herokuapp.com';
		}
		else if (preg_match("/outgrow\.co$/", $hostName)) {
			$apiUrl = 'https://api.outgrow.co';
		}
		$apiUrl = 'https://api.outgrow.co';
		$url = $apiUrl.'/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
		$url ='https://api.outgrow.co/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
	    $curl = curl_init();
	    curl_setopt_array($curl, array(
	        CURLOPT_RETURNTRANSFER => 1,
	        CURLOPT_URL => $url,
	        CURLOPT_USERAGENT => 'Codular Sample cURL Request',
			CURLOPT_SSL_VERIFYPEER=>false,
			CURLOPT_HTTPHEADER=>array('Origin: https://app.outgrow.co'),
	    ));
		$resp = curl_exec($curl);
		
	    //close connection
	    curl_close($curl);
	    $response = json_decode($resp,true);
	    if(!empty($response['data']))
	    {
	    	// This is the URL you want to shorten
			unset($curl);
			// curl to get calc integration
			$curl2 = curl_init();
			curl_setopt_array($curl2, array(
					CURLOPT_RETURNTRANSFER => 1,
					CURLOPT_URL => $apiUrl.'/api/v1/builder/app_integration/'.$response['data']['url'],
					CURLOPT_USERAGENT => 'Codular Sample cURL Request',
					CURLOPT_SSL_VERIFYPEER=>false,
					CURLOPT_HTTPHEADER=>array('Origin: http://app.rely.co'),
			));
			$resp2 = curl_exec($curl2);
			curl_close($curl2);
			$pages = "";
			$result=json_decode($resp2,true);			
			if(!empty($result['data'])) {	
			    if(result['data']['instant_articles']){
					$pages = $result['data']['instant_articles']['page_id'];
			    }
			}			
			unset($curl2);
			// end of calc integration
			$name = explode("?", $_SERVER['REQUEST_URI']);
			$longUrl = $_SERVER['REQUEST_SCHEME'].'://live.outgrow.co/seo'.$name[0];
			$apiKey = 'AIzaSyAyEiPl1ZWGqIjhCb4hPz34HgwLS_G9zZk';
			$postData = array('longUrl' => $longUrl, 'key' => $apiKey);
			$jsonData = json_encode($postData);
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, 'https://www.googleapis.com/urlshortener/v1/url?key='.$apiKey);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
			curl_setopt($curl, CURLOPT_HEADER, 0);
			curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type:application/json'));
			curl_setopt($curl, CURLOPT_POST, 1);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonData);
			$responseData = curl_exec($curl);
			$json = json_decode($responseData,true);
			$shortUrl = isset($json['id']) ? $json['id'] : $longUrl;
			//close connection
			curl_close($curl);

			//link to image
	  	if(isset($response['data']['seoImage']) && !empty($response['data']['seoImage'])){
	  	    $imageLink = $response['data']['seoImage'];
	    }else{
          $delayFactor = mt_rand(2500,5000);
		  //$imageLink = "http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=delay:{$delayFactor}/".$shortUrl;
		  $imageLink = "http://api.screenshotlayer.com/api/capture?access_key=8df67e5f400883f215f8e8d7a7588bf4&url=" .$shortUrl. "&viewport=1200x630&fullpage=1&delay=3";
	    }

	?>
		<title>
			<?php echo $response['data']['title']; ?>
		</title>
		<meta name="description" content="<?php echo $response['data']['description']; ?>">
		<meta property="og:title" content="<?php echo $response['data']['title']; ?>" />
		<meta property="og:description" content="<?php echo $response['data']['description']; ?>" />
		<meta property="og:image" content="<?php echo $imageLink; ?>" />
		<meta name="twitter:card" content="summary">
		<meta name="twitter:title" content="<?php echo $response['data']['title']; ?>">
		<meta name="twitter:description" content="<?php echo $response['data']['description']; ?>">
		<meta name="twitter:image" content="<?php echo $imageLink; ?>">
		<meta property="fb:pages" content="<?php echo $pages; ?>" />
	<?php
	    }
	    else
	    {
	?>
		<title>Outgrow</title>
		<meta name="description" content="Easily create interactive experiences that increase conversion and bring traffic.">
		<meta property="og:title" content="Interactive Calculators & Quizzes from Outgrow" />
		<meta property="og:description" content="Easily create interactive experiences that increase conversion and bring traffic." />
		<meta property="og:image" content="https://cdn.filestackcontent.com/1lm3eyhnQ8Kfh2li09Kq"/>
		<meta name="twitter:card" content="summary">
		<meta name="twitter:title" content="Interactive Calculators & Quizzes from Outgrow">
		<meta name="twitter:description" content="Easily create interactive experiences that increase conversion and bring traffic.">
		<meta name="twitter:image" content="https://cdn.filestackcontent.com/1lm3eyhnQ8Kfh2li09Kq">
	<?php
	    }
	?>
</head>
	<body>
	</body>
</html>