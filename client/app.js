const multiply = require("./multiply.js");

const ViewManager = () => {
    let cats = 2;
    return {
        connectEventhandlers: function() {
            document.getElementById("form-numbers")
            .addEventListener("submit", this.onSubmit.bind(this));
            document.getElementById("more")
            .addEventListener("click", this.addInput);
        },
        addInput: function() { 
            let newDiv = document.createElement('div');
            newDiv.innerHTML = "Number " + (cats+1) + " <input id='input-num" + (cats+1) + "' type='text' size='3' >";
            document.getElementById(3).appendChild(newDiv);
            cats+=1;
        },

        onSubmit: function(event) {
            event.preventDefault();
            let count = parseInt(cats);
            function gatherInputs (x, memo) {
                if (!memo) {memo = []}
                if (x > 0) {
                    memo.push(parseInt(document.getElementById(`input-num${x}`).value, 10))
                    return gatherInputs(x-=1, memo);
                }
                return memo;
            }
            let numbers = gatherInputs(count);
            
            const product = multiply(numbers);

            this.renderProduct(product);
        },

        renderProduct: function(number) {
            document.getElementById('product').textContent = number;
        }
    }
};

const viewManager = ViewManager();
viewManager.connectEventhandlers();