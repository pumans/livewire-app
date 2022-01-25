var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = 'New message to ' + recipient
    modalBodyInput.value = recipient
})

Livewire.on("deleteTriggered", (id, name) => {
    const proceed = confirm(`Are you sure you want to delete ${name}`);


    if (proceed) {
        Livewire.emit("delete", id);
    }
});

window.addEventListener("user-saved", (event) => {
    $("#user-modal").modal("hide");
    alert(`User ${event.detail.user_name} was ${event.detail.action}!`);
});
Livewire.on("dataFetched", (user) => {
    $("#user-modal").modal("show");
});
