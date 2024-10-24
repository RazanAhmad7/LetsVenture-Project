
fetch('../Components/navbar.html').then((response)=>response.text()).then(data=>
    {
        document.getElementById("navbar").innerHTML = data;
    }
    );


    fetch('../Components/footer.html').then((response)=>response.text()).then(data=>
        {
            document.getElementById("myFooter").innerHTML = data;
        }
        );