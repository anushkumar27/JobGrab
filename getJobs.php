<?php
extract($_GET);

$con=mysqli_connect("localhost","root","","jobGrab");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "SELECT job_title, company_login, salary, join_date FROM job where ad_id=".$jobid;
$result = mysqli_query($con, $sql); 

$row = $result->fetch_assoc();
echo implode(",",$row)

?>