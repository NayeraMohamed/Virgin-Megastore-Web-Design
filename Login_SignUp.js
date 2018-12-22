/* exported formValidationSetup, refreshErrorMessages */
/* exported LoginForm() */
/* exported RegForm() */
function LoginForm()
{
    var valid = true;
    if (document.myForm1.mail.value == "" || document.myForm1.pass.value== "")
    {
        valid = false;
    }
    else
    {
        alert("Welcome Back");
    }
    return valid;
    
}

function RegForm()
{
    var valid = true;
    if (document.myForm2.fn.value == "" || document.myForm2.ln.value == "" || document.myForm2.email.value == "" || document.myForm2.pw.value == "" || document.myForm2.cpw.value == "")
    {
        valid = false;
    }
    else
    {
        alert("Welcome to our Circle");
    }
    return valid;
}