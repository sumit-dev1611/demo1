 $(document).ready(function() {
            var json = {
                "data": [{
                    "id": "property",
                    "name": "Property"
                }, {
                    "id": "Editproperty",
                    "name": "Edit property"
                }, {
                    "id": "Removeproperty",
                    "name": "Remove property"
                }, {
                    "id": "Addproperty",
                    "name": "Add property"
                }, {
                    "id": "Testimonial",
                    "name": "Testimonial"
                }, {
                    "id": "Add",
                    "name": "Add"
                }, {
                    "id": "Remove",
                    "name": "Remove"
                }, {
                    "id": "View",
                    "name": "View"
                }, {
                    "id": "Edit",
                    "name": "Edit"
                }, {
                    "id": "User",
                    "name": "User"
                }, {
                    "id": "EditUser",
                    "name": "Edit User"
                }, {
                    "id": "ViewUserList",
                    "name": "View User List"
                }, {
                    "id": "AddUser",
                    "name": "Add User"
                }, {
                    "id": "Membership",
                    "name": "Membership"
                }, {
                    "id": "Editmembership",
                    "name": "Edit membership"
                }, {
                    "id": "RemoveMembership",
                    "name": "Remove Membership"
                }, {
                    "id": "Addmembership",
                    "name": "Add membership"
                }]
            };
            var checkUncheck = function() {
                $('input[type=checkbox]').change(function() {
                    $(this).siblings('ul').find(':checkbox').prop('checked', this.checked);
                    if (this.checked) {
                        $(this).parentsUntil(this, 'ul').siblings(':checkbox').prop('checked', true);
                    } else {
                        $(this).parentsUntil(this, 'ul').each(function() {
                            var $this = $(this);
                            var childSelected = $this.find(':checkbox:checked').length;
                            if (!childSelected) {
                                $this.prev(':checkbox').prop('checked', false);
                            }
                        });
                    }
                });
            }
            checkUncheck();

            var selectbox = function() {
                $("#sel").empty();
                $("#sel").append("<option></option>");
                for (var i = 0; i < json.data.length; i++) {
                    $("#sel").append("<option class=" + json.data[i].id + ">" + json.data[i].name + "</option>");
                }
            }
            selectbox();


            $("button").click(function() {

                for (var i = 0; i < json.data.length; i++) {
                    var className = '';
                    var classNameNew = '';
                    if (json.data[i].name == $("#sel").val()) {
                        
                        className = json.data[i].name.replace(/\s/g, '');
                        classNameNew = $("#txt").val().replace(/\s/g, '');
        
                        if ($("." + className).closest("li").children("ul").length) {
                        
                            $("." + className).children('ul').append("<li class=" + classNameNew + "><input type='checkbox'/>" + $("#txt").val() + "</li>");
                            checkUncheck();
                        } else {

                            $("." + className).append("<ul><li class=" + classNameNew + "><input type='checkbox'/>" + $("#txt").val() + "</li></ul>");
                            checkUncheck();
                        }
                        if (jQuery('.' + classNameNew + ' input[type=checkbox]').closest('ul').parent().find(':checkbox:checked').length > 0) {
                            jQuery('.' + classNameNew + ' input[type=checkbox]').prop('checked', true);
                        }
                        json.data.push({
                            "id": $("#txt").val(),
                            "name": $("#txt").val()
                        });



                    }
                }
                
                selectbox();


            });
        });