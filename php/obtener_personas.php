<?php
include_once "cors.php";
$personas = [
	[
		"nombre"=>"Lizet",
		"apellido"=>"Pretel",
		"documento"=>78451298,
		"edad" => 23
	],
	[
		"nombre"=>"Delver",
		"apellido"=>"Villanueva",
		"documento"=>72770659,
		"edad" => 50
	],
	[
		"nombre"=>"Pepito",
		"apellido"=>"pepo",
		"documento"=>26958745,
		"edad" => 15
	],
	[
		"nombre"=>"Rául",
		"apellido"=>"Ramirez",
		"documento"=>15458786,
		"edad" => 13
	],
	[
		"nombre"=>"Juan",
		"apellido"=>"Pérez",
		"documento"=>12589547,
		"edad" => 20
	]
];
echo json_encode($personas);