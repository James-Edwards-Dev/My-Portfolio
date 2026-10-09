let  prev_active_section_button= "btn_projects";

function show_only_this_section(button_name) {
    if (prev_active_section_button === button_name){
        return;
    }
    if (prev_active_section_button !== "null"){
        document.getElementById(prev_active_section_button).classList.remove("active");
    }
    let prev_active_section = prev_active_section_button.substring(4);
    let new_active_section = button_name.substring(4);
    
    prev_active_section_button = button_name;
    
    document.getElementById(button_name).classList.add("active");
    document.getElementById(new_active_section).classList.remove("disabled");
    document.getElementById(prev_active_section).classList.add("disabled");
}