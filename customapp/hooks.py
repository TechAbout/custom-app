from . import __version__ as app_version

app_name = "customapp"
app_title = "Custom App"
app_publisher = "Kavitha Balakrishnan"
app_description = "Demonstrate basic customization in erpnext/frappe"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "kavitha1995@gmail.com"
app_license = "MIT"

# add custom script for the doctype 
# (option 2: can directly add in UI using "Custom Script" doctype)
doctype_js = {"Role" : "public/js/role.js"}

app_include_css = "public/js/logo_modify.css"
app_include_js = "public/js/remove_help_tab.js"
app_include_js = "public/js/remove_learn_module.js"


# will be executed after successfully installing this app
after_install = "customapp.install.after_install"
