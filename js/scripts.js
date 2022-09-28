// Add new item to the list
function newItem() {
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something');
    } else {
        list.append(li);
    }

    // Cross out an item from the list
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // Add the delete button
    let  crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // deletes the item by adding class delete styled on CSS with display: none
    function deleteListItem() {
        li.addClass('delete');
    }
    // allow list items to be dragged for sorting
    list.sortable();
}

$(document).on('keypress', function(e) {
    if (e.which == 13) {
        e.preventDefault()
        return newItem();
    }
})
