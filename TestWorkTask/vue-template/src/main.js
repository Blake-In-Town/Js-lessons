// Описание задачи
// 1. Починить код
// 2. Добавить кнопку и функцию удаления задачи
// 3. Посмотреть на код и
// 3.1. Перечислить, что бы вы сделали по-другому
// 3.2. [опционально] Переписать код как душа просит
// Комментарии по ошибкам можно писать прямо в коде

// var vue = require("vue");

window.app = new vue({
  el: "#app",

  data() {
    return {
      innerData: {
        //транслит не приветствуется 
        tasks: [],
        activeFilter: ""
      },
      value: "Задача 1"
    };
  },
  created() {
    var search = document.getElementById("search") || {};
    search.focus();
  },
  template: `
    <div>
        <input v-bind:value="value" id="search" />
        <button v-on:click="todo()">Добавить задачу</button>

        <div v-if="innerData.activeFilter == 'active'">
          <div v-for="todo in innerData.tasks" v-if="todo.completed != true">
            {{ todo.name }}
            <div v-on:click="remove(todo)"></div>
          </div>
        </div>

        <div v-if="innerData.activeFilter == 'Все'">
        1212
          <div v-for="todo in innerData.tasks">
            {{ todo.name }}
            <div v-on:click="remove(todo)"></div>
          </div>
        </div>

        <div v-if="innerData.activeFilter == 'completed'">
          <div v-for="todo in innerData.tasks" v-if="todo.completed == true">
            {{ todo.name }}
            <div v-on:click="remove(todo)"></div>
          </div>
        </div>
 
        <div>
        <span v-on:click="setFilter('active')">Активные</span>
        <span v-on:click="setFilter('all')">Все</span>
        <span v-on:click="setFilter('completed')">Завершенные</span>
        </div>
    </div>
  `,

  methods: {
    todo(t) {
      tasks[tasks.length + 1] = t;
    },
    remove(t) {
      var todos = [];

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].name != t.name) {
          todos.push(todos[i]);
        }
      }
      this.$set(this.innerData, "tasks", todos);
    },

    setFilter(filter) {
      this.$set(this.innerData, "activeFilter", filter);
    }
  }
});
