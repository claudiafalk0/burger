# burger
This project is meant to show the use of mySql, heroku, handlebars, and js. For this project, a user should be able to input and delete a burger from the list, then when the page refreshes the object they have added/deleted should still exist on the table. This project is being hosted on heroku.

<ul>
  {{#each burger}}
    {{#unless hasEaten}}
      <li>
	{{name}}

	<button class="change-burger" data-id="{{id}}" data-newhaseaten="{{hasEaten}}">
		{{#unless hasEaten}}Devour the Burger!{{/unless}}
	</button>

	<button class="delete-burger" data-id="{{this.id}}">DELETE!</button>
</li>
    {{/unless}}
  {{/each}}
</ul>

<h2>Burgers you've eaten!</h2>

<ul>
  {{#each burger}}
    {{#if hasEaten}}
    <li>
     {{name}}
    </li>
    {{/if}}
  {{/each}}
</ul>