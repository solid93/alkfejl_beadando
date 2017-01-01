$('#create-task').click(function (event) {
    event.preventDefault();
    var redirect_to = $(this).attr('href');
    var modal = $('#mainModal');
    modal.find('.modal-title').text("");
    modal.find('.modal-body').load(redirect_to + ' #block-modal-content');
    modal.find('.modal-footer').text("");
    // run refresh on select2?
    $('#mainModal').modal('show');
});