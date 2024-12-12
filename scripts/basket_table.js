document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const table_body = document.querySelector('tbody');
    const storage_name = "basket_table_storage";

    form.addEventListener('submit', () => {
        const _name = document.getElementById("basket_add_name").value;
        const _class = document.getElementById("basket_add_class").value;
        add({_name, _class});
    });

    const add = ({_name, _class}) => {
        const name_td = document.createElement('td');
        name_td.textContent = _name;
        const class_td = document.createElement('td');
        class_td.textContent = _class;

        const row = document.createElement('tr');
        row.appendChild(name_td);
        row.appendChild(class_td);

        table_body.appendChild(row);

        save();
    }

    const save = () => {
        const data = Array
            .from(table_body.querySelectorAll('tr'))
            .map((row) => {
                return {
                _name: row.cells[0].textContent,
                _class: row.cells[1].textContent
            }});

        localStorage.setItem(storage_name, JSON.stringify(data));
    }

    const load = () => {
        const data = JSON.parse(localStorage.getItem(storage_name)) || [];
        data.forEach((item) => add(item));
    }

    load();
});