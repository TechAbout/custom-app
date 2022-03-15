frappe.ui.form.on('Role', {
    refresh: function(frm) {
        // gets the html of the custom field
        let wrapper = frm.fields_dict.custom_html.wrapper;
        // construct custom html
        let html = $(`<div>
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-primary">${__("Primary Button")}</button>
                    <div style="padding: 15px 0;">
                        ${__("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
                    </div>
                </div>
            </div>
        </div>`).appendTo(wrapper);

        // add click function to the button in custom html
        html.find('.btn-primary').click(() => {
            frappe.msgprint("Button clicked");
        })
    }
})