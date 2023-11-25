let owner_name_input_element=document.getElementById('ownerName') as HTMLInputElement;
let fixed_amount_input_element=document.getElementById('fixedAmount') as HTMLInputElement;
let fixed_btn_element=document.getElementById('addFixBtn');


fixed_btn_element.addEventListener('click', () =>{
    let ownerName = owner_name_input_element.value;
    let fixedAmount = fixed_amount_input_element.value;

    console.log(ownerName);
    console.log(fixedAmount);
})