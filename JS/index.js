
    const root = document.querySelector('#root')
    let ul = document.getElementById("minhaLista");
    let il;
    let itemId;
    let item;
   

    addTarefa = function() {
        if(document.getElementById("tarefa").value != "") {

            item = document.getElementById("tarefa")

            itemId = ul.childElementCount;

            li = criarElementoItem(item.value,itemId);
            li.appendChild(criarButaoRemoverTarefa(itemId));
            ul.appendChild(li);
            item.value = "";

        }
    }

    removerTarefa = function(itemId) {
        for( i=0 ; i <ul.children.length ; i++) {

            if(ul.children[i].getAttribute("index") == itemId){

                ul.children[i].remove();

            }
        }
    }

    criarElementoItem = function(itemValue, itemId) {

        let li = document.createElement("li");

        li.setAttribute("index", itemId);

        li.appendChild(document.createTextNode(itemValue));

        return li;
    }

    criarButaoRemoverTarefa = function(itemId) {

        let botao = document.createElement("button");

        botao.setAttribute("onclick", "removerTarefa("+itemId+")");

        botao.innerHTML = "X";

        return botao;
    }
  