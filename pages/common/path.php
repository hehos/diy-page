<?php 
    define('SI_ROOT',   str_replace('\\','/',dirname(__FILE__)) . '/');

    $_SERVER['DOCUMENT_ROOT'] = ucfirst(str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']));
	if($_SERVER['DOCUMENT_ROOT'] . '/' == SI_ROOT){
	    define('SI_ROOT_WEB', '/');
	}else{
	    $scriptName = dirname($_SERVER['SCRIPT_NAME']);
	    $scriptName = rtrim($scriptName, '\\');
	    define('SI_ROOT_WEB', $scriptName.'/');
	}

  	$HTTP_HOST = 'http://' . $_SERVER['HTTP_HOST'] . dirname(SI_ROOT_WEB) .'/';
	rtrim($HTTP_HOST, '\\');
	define('BASE_URL', $HTTP_HOST);
	
	
	$UIFramePath = BASE_URL . "UIFrame";
	$cssPath = BASE_URL . "css";
	$jsPath = BASE_URL . "js";
	$pageCssPath = $cssPath . "/pageStyle";
	$imgPath = BASE_URL . "image"; 
	$commFilePath = BASE_URL . "view/comm";
	
?>
