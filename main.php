<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		$host = explode('.',$_SERVER['HTTP_HOST']);
		array_shift($host);
		$apiUrl = 'api.'.implode('.',$host);
		if (strpos($apiUrl, 'outgrow') !== false) {
			$url = $_SERVER['REQUEST_SCHEME'].'://'.$apiUrl.'/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
		} else {
			$url ='https://api.outgrow.co/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
		}
	    $curl = curl_init();
	    curl_setopt_array($curl, array(
	        CURLOPT_RETURNTRANSFER => 1,
	        CURLOPT_URL => $url,
	        CURLOPT_USERAGENT => 'Codular Sample cURL Request',
	        CURLOPT_SSL_VERIFYPEER=>false,
	    ));
	    $resp = curl_exec($curl);
	    //close connection
	    curl_close($curl);
	    $response	=	json_decode($resp,true);
	    if(!empty($response['data']))
	    {
	    	// This is the URL you want to shorten
	    	unset($curl);
			$name = explode("?", $_SERVER['REQUEST_URI']);
			$longUrl = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].'/seo'.$name[0];
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
          $imageLink = "http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=delay:{$delayFactor}/".$shortUrl;
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
	<?php
	    }
	    else
	    {
	?>
		<title>Outgrow</title>
		<meta name="description" content="Easily create interactive experiences that increase conversion and bring traffic.">
		<meta property="og:title" content="Interactive Calculators & Quizzes from Outgrow" />
		<meta property="og:description" content="Easily create interactive experiences that increase conversion and bring traffic." />
		<meta property="og:image" content="https://cdn.filestackcontent.com/sPhaDxuBSFKRZiXXLWzm"/>
		<meta name="twitter:card" content="summary">
		<meta name="twitter:title" content="Interactive Calculators & Quizzes from Outgrow">
		<meta name="twitter:description" content="Easily create interactive experiences that increase conversion and bring traffic.">
		<meta name="twitter:image" content="https://cdn.filestackcontent.com/sPhaDxuBSFKRZiXXLWzm">
	<?php
	    }
	?>
</head>
	<body>
	</body>
</html>