<!DOCTYPE html>
<html lang="en">
<head>
<?php
$url	=	'https://api.outgrow.co/api/v1/builder/get_calc'.$_SERVER['REQUEST_URI'];
$opts	=	array(
				'http' =>	array(
					'header'  => 'Origin: https://app.outgrow.co'
				)
			);
$context	=	stream_context_create($opts);
$resp		=	file_get_contents($url, false, $context);
$response 	=	json_decode($resp, true);
if(!empty($response['data'])) {
	if(isset($response['data']['seoImage']) && !empty($response['data']['seoImage'])) {
		$imageLink = $response['data']['seoImage'];
	} else {
		$imageLink = 'http://dzvexx2x036l1.cloudfront.net/screenshot/' . $response['data']['parentApp'] . "__w.png";
	}
?>
	<title><?php echo $response['data']['title']; ?></title>
	<meta name="description" content="<?php echo $response['data']['description']; ?>">
	<meta property="og:title" content="<?php echo $response['data']['title']; ?>" />
	<meta property="og:description" content="<?php echo $response['data']['description']; ?>" />
	<meta property="og:image" content="<?php echo $imageLink; ?>" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="<?php echo $response['data']['title']; ?>">
	<meta name="twitter:description" content="<?php echo $response['data']['description']; ?>">
	<meta name="twitter:image" content="<?php echo $imageLink; ?>">
<?php
} else {
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
<body></body>
</html>
