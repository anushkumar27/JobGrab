<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$jobs=array();
$con=mysqli_connect("localhost","root","","jobGrab");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "SELECT ad_id, status FROM job";
$result = mysqli_query($con, $sql);

$tempResult = mysqli_query($con, $sql);
while ($row = $result->fetch_assoc()) 
{
    $tempStatus = $row["status"];
    $t=$row["ad_id"];
    if(strcmp($tempStatus,"OPEN") !==0 and !in_array($t,$jobs))
    {
        //$t=$row["ad_id"];
        array_push($jobs, $t);
        echo "data: {$t}\n\n";
        //echo "data: 1\n\n";
    }

}

flush();
?> 