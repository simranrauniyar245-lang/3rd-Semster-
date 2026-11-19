function enableQty(id, box)
{
    var qty = document.getElementById(id);

    if(box.checked)
    {
        qty.disabled = false;
        qty.focus();
    }
    else
    {
        qty.disabled = true;
        qty.value = "";
    }
}

function bill()
{
    var total = 0;

    if(document.getElementById("b1").checked)
    {
        var q1 = document.getElementById("q1").value;

        if(q1 == "")
        {
            alert("Enter Quantity for Biography Of Prem Chand");
            document.getElementById("q1").focus();
            return;
        }

        total = total + 200 * q1;
    }

    if(document.getElementById("b2").checked)
    {
        var q2 = document.getElementById("q2").value;

        if(q2 == "")
        {
            alert("Enter Quantity for Harry Potter");
            document.getElementById("q2").focus();
            return;
        }

        total = total + 1800 * q2;
    }

    if(document.getElementById("b3").checked)
    {
        var q3 = document.getElementById("q3").value;

        if(q3 == "")
        {
            alert("Enter Quantity for Discovery Of India");
            document.getElementById("q3").focus();
            return;
        }

        total = total + 650 * q3;
    }

    if(document.getElementById("b4").checked)
    {
        var q4 = document.getElementById("q4").value;

        if(q4 == "")
        {
            alert("Enter Quantity for Alif Laila Story");
            document.getElementById("q4").focus();
            return;
        }

        total = total + 250 * q4;
    }

    if(document.getElementById("b5").checked)
    {
        var q5 = document.getElementById("q5").value;

        if(q5 == "")
        {
            alert("Enter Quantity for Amitabh Bachchan");
            document.getElementById("q5").focus();
            return;
        }

        total = total + 500 * q5;
    }

    if(total == 0)
    {
        alert("Please Select Any Book");
    }
    else
    {
        alert("Total Bill = ₹" + total);
    }
}

function resetPage()
{
    location.reload();
}