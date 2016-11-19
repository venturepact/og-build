<!DOCTYPE html>
<html lang="en">
<head>
	<?php
		// This is the URL you want to shorten
		$longUrl = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$apiKey = 'AIzaSyAyEiPl1ZWGqIjhCb4hPz34HgwLS_G9zZk';
		$postData = array('longUrl' => $longUrl, 'key' => $apiKey);
		$jsonData = json_encode($postData);
		$curlObj = curl_init();
		curl_setopt($curlObj, CURLOPT_URL, 'https://www.googleapis.com/urlshortener/v1/url?key='.$apiKey);
		curl_setopt($curlObj, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curlObj, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($curlObj, CURLOPT_HEADER, 0);
		curl_setopt($curlObj, CURLOPT_HTTPHEADER, array('Content-type:application/json'));
		curl_setopt($curlObj, CURLOPT_POST, 1);
		curl_setopt($curlObj, CURLOPT_POSTFIELDS, $jsonData);
		$response = curl_exec($curlObj);
		$json = json_decode($response);
		curl_close($curlObj);
		$short_url	=	$json->id;
	
		$host = explode('.',$_SERVER['HTTP_HOST']);
		array_shift($host);
		$apiUrl = 'api.'.implode('.',$host);
		$url = $_SERVER['REQUEST_SCHEME'].'://'.$apiUrl.'/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
	    $curl = curl_init();
	    curl_setopt_array($curl, array(
	        CURLOPT_RETURNTRANSFER => 1,
	        CURLOPT_URL => $url,
	        CURLOPT_USERAGENT => 'Codular Sample cURL Request',
	        CURLOPT_SSL_VERIFYPEER=>false,
	    ));
	    $resp = curl_exec($curl);
	    $response	=	json_decode($resp,true);
	    if(!empty($response['data']))
	    {
	    	$imageLink = 'http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=delay:3000/'.$short_url;
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
		<meta name="description" content="How much does culture influence creative thinking?">
		<meta property="og:title" content="When Great Minds Don’t Think Alike" />
		<meta property="og:description" content="How much does culture influence creative thinking?" />
		<meta property="og:image" content="http://cdn.filestackcontent.com/hkYZHltiSiqv7tsv4UA2"/>
		<meta name="twitter:card" content="summary">
		<meta name="twitter:title" content="When Great Minds Don’t Think Alike">
		<meta name="twitter:description" content="How much does culture influence creative thinking?">
		<meta name="twitter:image" content="http://cdn.filestackcontent.com/hkYZHltiSiqv7tsv4UA2">
	<?php
	    }
	    curl_close($curl);
	?>
</head>
	<body>
	</body>
</html>
