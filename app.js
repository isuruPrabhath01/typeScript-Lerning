var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var fixed_btn_element = document.getElementById('addFixBtn');
fixed_btn_element.addEventListener('click', function () {
    var ownerName = owner_name_input_element.value;
    var fixedAmount = fixed_amount_input_element.value;
    console.log(ownerName);
    console.log(fixedAmount);
});
