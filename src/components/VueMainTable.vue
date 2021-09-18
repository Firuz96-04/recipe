<template>
    <div class="container">
            <button class="btn btn-primary " style="float:left" @click="add">+</button>
        
         <div class="row">
        <div class="col-md-8">
        <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                            Рецепт
                            </th>
                    
                            <th>
                                Ингредиент
                            </th>
                            <th>
                            !!!!!!
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="rec in recipe" :key="rec.key">
                            <td>{{rec.recipe_name}}</td>
                             <td>{{rec.ingredient_name}}</td>
                              <td>
                                <button class="btn btn-danger" @click="delete_recipe(rec.key)">Удалить</button>
                                <button class="btn btn-warning m-1" @click="edit_recipe(rec.key)">Редактировать</button>

                              </td>
                        </tr>
                    </tbody>
        </table>
        </div>
        </div>
      </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
    data() {
        return{
            info:{
                recipe_name:'',
                ingredient_name:''
            },
            recipe:[],
            storeName:'',
            storeIngredients:'',
            addCounter:3,
            editKey:'',
            edit_data:''
 }
    },

    methods: {
            edit_recipe(id) {
            let editRecipe = prompt('Добавить ингредиент','')

                if(editRecipe !=null && editRecipe != ''){
                    this.editKey = id
                    this.addCounter =0
                       localStorage.setItem('counter',0)

               localStorage.setItem('ingredients',editRecipe)
               localStorage.setItem('edit_data',id)
              
              }
                else {
                    console.log("Ингредиент пустой")
                }
                },
        saveToLocal(name,ingredient){
                localStorage.setItem('recipe_name',name)
                localStorage.setItem('ingredients',ingredient)
        },

            getAllData() {
                db.collection('recipe').get().then(snapshotChange => {
                    snapshotChange.forEach(doc => {
                       this.recipe.push({
                           key:doc.id,
                           recipe_name:doc.data().recipe_name,
                           ingredient_name:doc.data().ingredient_name
                      })
                       
                    })
                })
            },

            add() {
                let addNameToLocalStorage = prompt('Добавте рецепт','')
                    if(addNameToLocalStorage != null && addNameToLocalStorage != ""){
                    this.addCounter =1
                     this.saveToLocal(addNameToLocalStorage,'')
                        localStorage.setItem('counter',1)
                    }
           },
            delete_recipe(id) {
         db.collection('recipe').doc(id).delete().then(()=>{
                    console.log('udalyon')
              })
              .catch((error)=> {
                  console.log(error)
              })
            }
    },
    mounted() {

        if(localStorage.getItem("recipe_name")){
           this.storeName = localStorage.getItem("recipe_name")
            this.info.recipe_name = this.storeName
        }
                if(localStorage.getItem("ingredients")){
           this.storeIngredients = localStorage.getItem("ingredients")
            this.info.ingredient_name = this.storeIngredients
        }
        if(localStorage.getItem('recipe_name')){
            window.onload = ()=>{
                    if(localStorage.getItem('counter') == 1) {       
                db.collection('recipe').add(this.info)
               //  localStorage.setItem('edit_data','')
              }
                else if(localStorage.getItem('counter') == 0){
                    let kod = localStorage.getItem('edit_data')
                    console.log(localStorage.getItem('edit_data'))
                     db.collection('recipe').doc(kod).update({
                   ingredient_name:localStorage.getItem('ingredients')
                  
                })
                localStorage.setItem('counter',3)
               // localStorage.setItem('edit_data','')
                }
                else {

                }
              }
      

} 
     this.getAllData()
    },
    created() {
      
  }
}
</script>
