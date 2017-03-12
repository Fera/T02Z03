function feedback(url, success, error) {
    
    var xhr = new XMLHttpRequest();   	

	xhr.open("GET", url, true);
	
	xhr.onreadystatechange = function (e) {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            return (success)(e);
        }
        else {
        	return (error)(e);
        }
    };

	xhr.send();
}

feedback("https://jsonplaceholder.typicode.com/users", function(data) {
    console.log("Sukces");
    console.log(data);
}, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
});
