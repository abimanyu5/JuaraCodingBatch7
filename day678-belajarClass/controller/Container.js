class Container {



    constructor(parent){
        this.parent = parent ;
        this.innerHtml ="";
    }

    addComponent(...component){
        component.forEach((component) =>{
            this.innerHtml+=component.render();
        });
        this.parent.innerHTML=this.innerHtml;
    }
}
export  default Container;