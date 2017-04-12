<?php
extract($_GET);

$con=mysqli_connect("localhost","root","","jobgrab");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "UPDATE job SET status='CLOSED' WHERE ad_id=".$jobid;

$result = mysqli_query($con, $sql); 

?>