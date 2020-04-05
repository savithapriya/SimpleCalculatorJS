

window.onload=function(){
	const calculator = document.querySelector('.calculator');
	const keys = document.querySelector('.calc_keys');
	const display = document.querySelector('.displayScreen');
    const previousKeyType = calculator.dataset.previousKeyType;
	
keys.addEventListener('click',e=>{
	
	if(e.target.matches('button')){
		const key=e.target;
		const action =key.dataset.action;
		const keyContent = key.textContent;
		const displayedContent = display.textContent;
		if(!action){
			console.log('number key!');
			if(displayedContent==='0' || calculator.dataset.previousKeyType ==='key_operator'){
				console.log("previousKeyType="+previousKeyType);
				display.textContent=keyContent;
				calculator.dataset.previousKeyType="";
			}
			else{

				display.textContent=displayedContent+keyContent;
			}
		}
		if(action=='add' |
		action=='sub' |
		action=='multiply' |
		action=='divide'  
		){
			console.log('operator key!');
		 calculator.dataset.firstValue=displayedContent;
		 calculator.dataset.operator = action
		 calculator.dataset.previousKeyType='key_operator';
		

		}

		if(action=='equals'){
			console.log('equals key');
			const firstValue=calculator.dataset.firstValue;
			const operator= calculator.dataset.operator;
			const secondValue=displayedContent;
			display.textContent=calculate(firstValue,operator,secondValue);
		}
		if(action=='cancel'){
			console.log('cancel key');
			display.textContent="0";
		}

       
	}

})

const calculate=(n1,operator,n2)=>{
	let result='';
	if(operator=='add')
	{
		result=parseInt(n1)+parseInt(n2);
	}
	else if(operator=='sub')
	{
		result=parseInt(n1)-parseInt(n2);
	}
	else if(operator=='multiply')
	{
		result=parseInt(n1)*parseInt(n2);
	}
	else if(operator=='divide')
	{
		result=parseInt(n1)/parseInt(n2);
	}
  
  return result;
}
}




