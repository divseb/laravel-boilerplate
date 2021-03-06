export default {
    "en": {
        "alerts": {
            "backend": {
                "users": {
                    "created": "User created",
                    "updated": "User updated",
                    "deleted": "User deleted",
                    "bulk_destroyed": "Selected users deleted",
                    "bulk_enabled": "Selected users enabled",
                    "bulk_disabled": "Selected users disabled"
                },
                "roles": {
                    "created": "Role created",
                    "updated": "Role updated",
                    "deleted": "Role deleted"
                },
                "metas": {
                    "created": "Meta created",
                    "updated": "Meta updated",
                    "deleted": "Meta deleted",
                    "bulk_destroyed": "Selected metas deleted"
                },
                "form_submissions": {
                    "deleted": "Submission deleted",
                    "bulk_destroyed": "Selected submissions deleted"
                },
                "form_settings": {
                    "created": "Form setting created",
                    "updated": "Form setting updated",
                    "deleted": "Form setting deleted"
                },
                "redirections": {
                    "created": "Redirection created",
                    "updated": "Redirection updated",
                    "deleted": "Redirection deleted",
                    "bulk_destroyed": "Selected redirections deleted",
                    "bulk_enabled": "Selected redirections enabled",
                    "bulk_disabled": "Selected redirections disabled",
                    "file_imported": "File successfully imported"
                },
                "posts": {
                    "created": "Post created",
                    "updated": "Post updated",
                    "deleted": "Post deleted",
                    "bulk_destroyed": "Selected posts deleted",
                    "bulk_published": "Selected posts published",
                    "bulk_pending": "Selected posts are awaiting moderation",
                    "bulk_pinned": "Selected posts pinned",
                    "bulk_promoted": "Selected posts promoted"
                },
                "actions": {
                    "invalid": "Invalid action"
                }
            },
            "frontend": []
        },
        "auth": {
            "failed": "These credentials do not match our records.",
            "throttle": "Too many login attempts. Please try again in {seconds} seconds."
        },
        "buttons": {
            "cancel": "Cancel",
            "save": "Save",
            "close": "Close",
            "create": "Create",
            "delete": "Delete",
            "confirm": "Confirm",
            "show": "Show",
            "edit": "Edit",
            "update": "Update",
            "view": "View",
            "preview": "Preview",
            "back": "Back",
            "send": "Send",
            "login-as": "Login as {name}",
            "apply": "Apply",
            "users": {
                "create": "Create user"
            },
            "roles": {
                "create": "Create role"
            },
            "metas": {
                "create": "Create meta"
            },
            "form_settings": {
                "create": "Create setting"
            },
            "redirections": {
                "create": "Create redirection",
                "import": "Import CSV\/Excel"
            },
            "posts": {
                "create": "Create post",
                "save_and_publish": "Save and publish",
                "save_as_draft": "Save as draft"
            }
        },
        "exceptions": {
            "general": "Server exception",
            "unauthorized": "Action not allowed",
            "backend": {
                "users": {
                    "create": "Error on user creation",
                    "update": "Error on user updating",
                    "delete": "Error on user deletion",
                    "first_user_cannot_be_edited": "You cannot edit super admin user",
                    "first_user_cannot_be_disabled": "Super admin user cannot be disabled",
                    "first_user_cannot_be_destroyed": "Super admin user cannot be deleted",
                    "first_user_cannot_be_impersonated": "Super admin user cannot be impersonated",
                    "cannot_set_superior_roles": "You cannot attribute roles superior to yours"
                },
                "roles": {
                    "create": "Error on role creation",
                    "update": "Error on role updating",
                    "delete": "Error on role deletion"
                },
                "metas": {
                    "create": "Error on meta creation",
                    "update": "Error on meta updating",
                    "delete": "Error on meta deletion",
                    "already_exist": "There is already a meta for this locale route"
                },
                "form_submissions": {
                    "create": "Error on submission creation",
                    "delete": "Error on submission deletion"
                },
                "form_settings": {
                    "create": "Error on form setting creation",
                    "update": "Error on form setting updating",
                    "delete": "Error on form setting deletion",
                    "already_exist": "There is already a setting linked to this form"
                },
                "redirections": {
                    "create": "Error on redirection creation",
                    "update": "Error on redirection updating",
                    "delete": "Error on redirection deletion",
                    "already_exist": "There is already a redirection for this path"
                },
                "posts": {
                    "create": "Error on post creation",
                    "update": "Error on post updating",
                    "save": "Error on post saving",
                    "delete": "Error on post deletion"
                }
            },
            "frontend": {
                "user": {
                    "email_taken": "That e-mail address is already taken.",
                    "password_mismatch": "That is not your old password.",
                    "delete_account": "Error on account deletion.",
                    "updating_disabled": "Account editing is disabled."
                },
                "auth": {
                    "registration_disabled": "Registration is disabled."
                }
            }
        },
        "forms": {
            "contact": {
                "display_name": "Contact form"
            }
        },
        "labels": {
            "language": "Language",
            "actions": "Actions",
            "general": "General",
            "no_results": "No results available",
            "search": "Search",
            "validate": "Validate",
            "choose_file": "Choose File",
            "no_file_chosen": "No file chosen",
            "are_you_sure": "Are you sure ?",
            "yes": "Yes",
            "no": "No",
            "add_new": "Add",
            "export": "Export",
            "more_info": "More info",
            "author": "Author",
            "last_access_at": "Last access at",
            "published_at": "Published at",
            "created_at": "Created at",
            "updated_at": "Updated at",
            "deleted_at": "Deleted at",
            "no_value": "No value",
            "upload_image": "Upload image",
            "all_rights_reserved": "All rights reserved.",
            "datatables": {
                "no_results": "No results available",
                "no_matched_results": "No matched results available",
                "show_per_page": "Show",
                "entries_per_page": "entries per page",
                "search": "Search",
                "infos": "Showing {offset_start} to {offset_end} of {total} entries"
            },
            "morphs": {
                "post": "Post, identity {id}",
                "user": "User, identity {id}"
            },
            "auth": {
                "disabled": "Your account has been disabled."
            },
            "http": {
                "403": {
                    "title": "Access Denied",
                    "description": "Sorry, but you do not have permissions to access this page."
                },
                "404": {
                    "title": "Page Not Found",
                    "description": "Sorry, but the page you were trying to view does not exist."
                },
                "500": {
                    "title": "Server Error",
                    "description": "Sorry, but the server has encountered a situation it doesn't know how to handle. We'll fix this as soon as possible."
                }
            },
            "localization": {
                "en": "English",
                "fr": "French"
            },
            "placeholders": {
                "route": "Select a valid internal route",
                "tags": "Select or create a tag"
            },
            "cookieconsent": {
                "message": "This website uses cookies to ensure you get the best experience on our website.",
                "dismiss": "Got it !"
            },
            "descriptions": {
                "allowed_image_types": "Allowed types: png gif jpg jpeg."
            },
            "user": {
                "dashboard": "Dashboard",
                "remember": "Remember",
                "login": "Login",
                "logout": "Logout",
                "password_forgot": "Forget password ?",
                "send_password_link": "Send reset password link",
                "password_reset": "Password Reset",
                "register": "Register",
                "space": "My space",
                "settings": "Settings",
                "account": "My account",
                "profile": "My profile",
                "avatar": "Avatar",
                "online": "Online",
                "edit_profile": "Edit my profile",
                "change_password": "Change my password",
                "delete": "Delete my account",
                "administration": "Administration",
                "member_since": "Member since {date}",
                "profile_updated": "Profile successfully updated.",
                "password_updated": "Password successfully updated.",
                "email_confirmation_sended": "Mail confirmation sended.",
                "email_confirmed": "Email successfully confirmed.",
                "super_admin": "Super administrateur",
                "account_delete": "<p>This action will delete entirely your account from this site as well as all associated data.<\/p>",
                "account_deleted": "Account successfully deleted",
                "titles": {
                    "space": "My space",
                    "account": "My account"
                }
            },
            "alerts": {
                "login_as": "You are actually logged as <strong>{name}<\/strong>, you can logout as <a href=\"{route}\">{admin}<\/a>.",
                "not_confirmed": "Your account will be in limited mode as long as your email remains not confirmed. <a href=\"{route}\">Click here<\/a> in order to resend mail confirmation."
            },
            "backend": {
                "dashboard": {
                    "new_posts": "New posts",
                    "pending_posts": "Pending posts",
                    "published_posts": "Published posts",
                    "active_users": "Active users",
                    "form_submissions": "Submissions",
                    "last_posts": "Last posts",
                    "last_published_posts": "Last publications",
                    "last_pending_posts": "Last pending posts",
                    "last_new_posts": "Last new posts",
                    "all_posts": "All posts"
                },
                "new_menu": {
                    "post": "New post",
                    "form_setting": "New form setting",
                    "user": "New user",
                    "role": "New role",
                    "meta": "New meta",
                    "redirection": "New redirection"
                },
                "sidebar": {
                    "content": "Content management",
                    "forms": "Form management",
                    "access": "Access management",
                    "seo": "SEO settings"
                },
                "titles": {
                    "dashboard": "Dashboard"
                },
                "users": {
                    "titles": {
                        "main": "User management",
                        "index": "User list",
                        "create": "User creation",
                        "edit": "User modification"
                    },
                    "actions": {
                        "destroy": "Delete selected users",
                        "enable": "Enable selected users",
                        "disable": "Disable selected users"
                    }
                },
                "roles": {
                    "titles": {
                        "main": "Role management",
                        "index": "Role list",
                        "create": "Role creation",
                        "edit": "Role modification"
                    }
                },
                "metas": {
                    "titles": {
                        "main": "Meta management",
                        "index": "Meta list",
                        "create": "Meta creation",
                        "edit": "Meta modification"
                    },
                    "actions": {
                        "destroy": "Delete selected metas"
                    }
                },
                "form_submissions": {
                    "titles": {
                        "main": "Submission management",
                        "index": "Submission list",
                        "show": "Submission detail"
                    },
                    "actions": {
                        "destroy": "Delete selected submissions"
                    }
                },
                "form_settings": {
                    "titles": {
                        "main": "Form setting",
                        "index": "Form setting list",
                        "create": "Form setting creation",
                        "edit": "Form setting modification"
                    },
                    "descriptions": {
                        "recipients": "Example: 'webmaster@example.com' or 'sales@example.com,support@example.com' . To specify multiple recipients, separate each email address with a comma.",
                        "message": "The message to display to the user after submission of this form. Leave blank for no message."
                    }
                },
                "redirections": {
                    "titles": {
                        "main": "Redirection management",
                        "index": "Redirection list",
                        "create": "Redirection creation",
                        "edit": "Redirection modification"
                    },
                    "actions": {
                        "destroy": "Delete selected redirections",
                        "enable": "Enable selected redirections",
                        "disable": "Disable selected redirections"
                    },
                    "types": {
                        "permanent": "Permanent redirect (301)",
                        "temporary": "Temporary redirect (302)"
                    },
                    "import": {
                        "title": "CSV\/Excel file import",
                        "label": "Select CSV\/Excel file to import",
                        "description": "File must have 2 columns with \"source\" and \"target\" as heading, redirection will be permanent by default"
                    }
                },
                "posts": {
                    "statuses": {
                        "draft": "Draft",
                        "pending": "Pending",
                        "published": "Published"
                    },
                    "titles": {
                        "main": "Post management",
                        "index": "Post list",
                        "create": "Create post",
                        "edit": "Edit post",
                        "publication": "Publication options"
                    },
                    "descriptions": {
                        "meta_title": "If leave empty, title will be that of article' title by default.",
                        "meta_description": "If leave empty, description will be that of article's summary by default."
                    },
                    "placeholders": {
                        "body": "Write your content...",
                        "meta_title": "Article's title.",
                        "meta_description": "Article's summary."
                    },
                    "actions": {
                        "destroy": "Delete selected posts",
                        "publish": "Publish selected posts",
                        "pin": "Pin selected posts",
                        "promote": "Promote selected posts"
                    }
                }
            },
            "frontend": {
                "titles": {
                    "home": "Home",
                    "about": "About",
                    "contact": "Contact",
                    "blog": "Blog",
                    "message_sent": "Message sent",
                    "legal_mentions": "Legal mentions",
                    "administration": "Administration"
                },
                "submissions": {
                    "message_sent": "<p>Your message has been successfully sent<\/p>"
                },
                "placeholders": {
                    "locale": "Select your language",
                    "timezone": "Select your timezone"
                },
                "blog": {
                    "published_at": "Published at {date}",
                    "published_at_with_owner_linkable": "Published at {date} by <a href=\"{link}\">{name}<\/a>",
                    "tags": "Tags"
                }
            }
        },
        "logs": {
            "backend": {
                "users": {
                    "created": "User ID {user} created",
                    "updated": "User ID {user} updated",
                    "deleted": "User ID {user} deleted"
                },
                "form_submissions": {
                    "created": "Form submission ID {form_submission} created"
                }
            },
            "frontend": []
        },
        "mails": {
            "layout": {
                "hello": "Hello !",
                "regards": "Regards",
                "trouble": "If you’re having trouble clicking the {action} button, copy and paste the URL below into your web browser :",
                "all_rights_reserved": "All rights reserved."
            },
            "password_reset": {
                "subject": "Password reset",
                "intro": "You are receiving this email because we received a password reset request for your account.",
                "action": "Reset Password",
                "outro": "If you did not request a password reset, no further action is required."
            },
            "email_confirmation": {
                "subject": "Email confirmation",
                "intro": "Email confirmation is required in order to unleash your account.",
                "action": "Confirm my email",
                "outro": "Your account will be limited as long as your email remains not confirmed."
            },
            "contact": {
                "subject": "New contact message",
                "new_contact": "You've got a new contact message. Submission detail :"
            },
            "alert": {
                "subject": "[{app_name}] Exception error",
                "message": "You've got unexpected server exception error which message is : {message}.",
                "trace": "All trace detail :"
            }
        },
        "pagination": {
            "previous": "&laquo; Previous",
            "next": "Next &raquo;"
        },
        "passwords": {
            "password": "Passwords must be at least six characters and match the confirmation.",
            "reset": "Your password has been reset!",
            "sent": "We have e-mailed your password reset link!",
            "token": "This password reset token is invalid.",
            "user": "We can't find a user with that e-mail address."
        },
        "permissions": {
            "categories": {
                "blog": "Blog",
                "form": "Forms",
                "access": "Access",
                "seo": "SEO"
            },
            "access": {
                "backend": {
                    "display_name": "Backoffice access",
                    "description": "Can access to administration pages."
                },
                "all": {
                    "backend": {
                        "display_name": "Full Backoffice access",
                        "description": "Fully unlock BO IHM access to all features. Server-side permissions stay unchanged. Usefull for Demo account or server-side permissions testing."
                    }
                }
            },
            "view": {
                "form_settings": {
                    "display_name": "View form settings",
                    "description": "Can view form settings."
                },
                "form_submissions": {
                    "display_name": "View form submissions",
                    "description": "Can view form submissions."
                },
                "users": {
                    "display_name": "View users",
                    "description": "Can view users."
                },
                "roles": {
                    "display_name": "View roles",
                    "description": "Can view roles."
                },
                "metas": {
                    "display_name": "View metas",
                    "description": "Can view metas."
                },
                "redirections": {
                    "display_name": "View redirections",
                    "description": "Can view redirections."
                },
                "posts": {
                    "display_name": "View all posts",
                    "description": "Can view all posts."
                },
                "own": {
                    "posts": {
                        "display_name": "View own posts",
                        "description": "Can view own posts."
                    }
                }
            },
            "create": {
                "form_settings": {
                    "display_name": "Create form settings",
                    "description": "Can create form settings."
                },
                "users": {
                    "display_name": "Create users",
                    "description": "Can create users."
                },
                "roles": {
                    "display_name": "Create roles",
                    "description": "Can create roles."
                },
                "metas": {
                    "display_name": "Create metas",
                    "description": "Can create metas."
                },
                "redirections": {
                    "display_name": "Create redirections",
                    "description": "Can create redirections."
                },
                "posts": {
                    "display_name": "Create posts",
                    "description": "Can create all posts."
                }
            },
            "edit": {
                "form_settings": {
                    "display_name": "Edit form settings",
                    "description": "Can edit form settings."
                },
                "users": {
                    "display_name": "Edit users",
                    "description": "Can edit users."
                },
                "roles": {
                    "display_name": "Edit roles",
                    "description": "Can edit roles."
                },
                "metas": {
                    "display_name": "Edit metas",
                    "description": "Can edit metas."
                },
                "redirections": {
                    "display_name": "Edit redirections",
                    "description": "Can edit redirections."
                },
                "posts": {
                    "display_name": "Edit all posts",
                    "description": "Can edit all posts."
                },
                "own": {
                    "posts": {
                        "display_name": "Edit own posts",
                        "description": "Can edit own posts."
                    }
                }
            },
            "delete": {
                "form_settings": {
                    "display_name": "Delete form settings",
                    "description": "Can delete form settings."
                },
                "form_submissions": {
                    "display_name": "Delete form submissions",
                    "description": "Can delete form submissions."
                },
                "users": {
                    "display_name": "Delete users",
                    "description": "Can delete users."
                },
                "roles": {
                    "display_name": "Delete roles",
                    "description": "Can delete roles."
                },
                "metas": {
                    "display_name": "Delete metas",
                    "description": "Can delete metas."
                },
                "redirections": {
                    "display_name": "Delete redirections",
                    "description": "Can delete redirections."
                },
                "posts": {
                    "display_name": "Delete all posts",
                    "description": "Can delete all posts."
                },
                "own": {
                    "posts": {
                        "display_name": "Delete own posts",
                        "description": "Can delete own posts."
                    }
                }
            },
            "publish": {
                "posts": {
                    "display_name": "Publish posts",
                    "description": "Can manage posts publication."
                }
            },
            "impersonate": {
                "display_name": "Impersonate user",
                "description": "Can take ownership of others user identities. Useful for tests."
            }
        },
        "routes": {
            "home": "home",
            "about": "about",
            "contact": "contact",
            "contact-sent": "contact-sent",
            "legal-mentions": "legal-mentions",
            "redactors": "blog\/redactors\/{user}"
        },
        "validation": {
            "accepted": "The {attribute} must be accepted.",
            "active_url": "The {attribute} is not a valid URL.",
            "after": "The {attribute} must be a date after {date}.",
            "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
            "alpha": "The {attribute} may only contain letters.",
            "alpha_dash": "The {attribute} may only contain letters, numbers, and dashes.",
            "alpha_num": "The {attribute} may only contain letters and numbers.",
            "array": "The {attribute} must be an array.",
            "before": "The {attribute} must be a date before {date}.",
            "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
            "between": {
                "numeric": "The {attribute} must be between {min} and {max}.",
                "file": "The {attribute} must be between {min} and {max} kilobytes.",
                "string": "The {attribute} must be between {min} and {max} characters.",
                "array": "The {attribute} must have between {min} and {max} items."
            },
            "boolean": "The {attribute} field must be true or false.",
            "confirmed": "The {attribute} confirmation does not match.",
            "date": "The {attribute} is not a valid date.",
            "date_format": "The {attribute} does not match the format {format}.",
            "different": "The {attribute} and {other} must be different.",
            "digits": "The {attribute} must be {digits} digits.",
            "digits_between": "The {attribute} must be between {min} and {max} digits.",
            "dimensions": "The {attribute} has invalid image dimensions.",
            "distinct": "The {attribute} field has a duplicate value.",
            "email": "The {attribute} must be a valid email address.",
            "exists": "The selected {attribute} is invalid.",
            "file": "The {attribute} must be a file.",
            "filled": "The {attribute} field must have a value.",
            "image": "The {attribute} must be an image.",
            "in": "The selected {attribute} is invalid.",
            "in_array": "The {attribute} field does not exist in {other}.",
            "integer": "The {attribute} must be an integer.",
            "ip": "The {attribute} must be a valid IP address.",
            "ipv4": "The {attribute} must be a valid IPv4 address.",
            "ipv6": "The {attribute} must be a valid IPv6 address.",
            "json": "The {attribute} must be a valid JSON string.",
            "max": {
                "numeric": "The {attribute} may not be greater than {max}.",
                "file": "The {attribute} may not be greater than {max} kilobytes.",
                "string": "The {attribute} may not be greater than {max} characters.",
                "array": "The {attribute} may not have more than {max} items."
            },
            "mimes": "The {attribute} must be a file of type: {values}.",
            "mimetypes": "The {attribute} must be a file of type: {values}.",
            "min": {
                "numeric": "The {attribute} must be at least {min}.",
                "file": "The {attribute} must be at least {min} kilobytes.",
                "string": "The {attribute} must be at least {min} characters.",
                "array": "The {attribute} must have at least {min} items."
            },
            "not_in": "The selected {attribute} is invalid.",
            "numeric": "The {attribute} must be a number.",
            "present": "The {attribute} field must be present.",
            "regex": "The {attribute} format is invalid.",
            "required": "The {attribute} field is required.",
            "required_if": "The {attribute} field is required when {other} is {value}.",
            "required_unless": "The {attribute} field is required unless {other} is in {values}.",
            "required_with": "The {attribute} field is required when {values} is present.",
            "required_with_all": "The {attribute} field is required when {values} is present.",
            "required_without": "The {attribute} field is required when {values} is not present.",
            "required_without_all": "The {attribute} field is required when none of {values} are present.",
            "same": "The {attribute} and {other} must match.",
            "size": {
                "numeric": "The {attribute} must be {size}.",
                "file": "The {attribute} must be {size} kilobytes.",
                "string": "The {attribute} must be {size} characters.",
                "array": "The {attribute} must contain {size} items."
            },
            "string": "The {attribute} must be a string.",
            "timezone": "The {attribute} must be a valid zone.",
            "unique": "The {attribute} has already been taken.",
            "uploaded": "The {attribute} failed to upload.",
            "url": "The {attribute} format is invalid.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": {
                "name": "Name",
                "display_name": "Display name",
                "username": "Pseudo",
                "email": "Email",
                "first_name": "Firstname",
                "last_name": "Lastname",
                "password": "Password",
                "password_confirmation": "Confirm password",
                "old_password": "Old password",
                "new_password": "New password",
                "new_password_confirmation": "Confirm new password",
                "postal_code": "Postal code",
                "city": "City",
                "country": "Country",
                "address": "Address",
                "phone": "Phone",
                "mobile": "Mobile",
                "age": "Age",
                "sex": "Sex",
                "gender": "Gender",
                "day": "Day",
                "month": "Month",
                "year": "Year",
                "hour": "Hour",
                "minute": "Minute",
                "second": "Second",
                "title": "Title",
                "content": "Content",
                "description": "Description",
                "summary": "Summary",
                "excerpt": "Excerpt",
                "date": "Date",
                "time": "Time",
                "available": "Available",
                "size": "Size",
                "roles": "Roles",
                "permissions": "Permissions",
                "active": "Active",
                "confirmed": "Confirmed",
                "message": "Message",
                "g-recaptcha-response": "Captcha",
                "locale": "Localization",
                "route": "Route",
                "url": "URL alias",
                "form_type": "Form type",
                "form_data": "Form data",
                "recipients": "Recipients",
                "source_path": "Original path",
                "target_path": "Target path",
                "redirect_type": "Redirect type",
                "timezone": "Timezone",
                "order": "Display order",
                "image": "Image",
                "status": "Status",
                "pinned": "Pinned",
                "promoted": "Promoted",
                "body": "Body",
                "tags": "Tags",
                "published_at": "Publish at",
                "unpublished_at": "Unpublish at",
                "metable_type": "Entity"
            }
        }
    },
    "fr": {
        "alerts": {
            "backend": {
                "users": {
                    "created": "Utilisateur créé",
                    "updated": "Utilisateur mis à jour",
                    "deleted": "Utilisateur supprimé",
                    "bulk_destroyed": "Utilisateurs sélectionnés supprimés",
                    "bulk_enabled": "Utilisateurs sélectionnés activés",
                    "bulk_disabled": "Utilisateurs sélectionnés désactivés"
                },
                "roles": {
                    "created": "Rôle créé",
                    "updated": "Rôle mis à jour",
                    "deleted": "Rôle supprimé"
                },
                "metas": {
                    "created": "Meta créée",
                    "updated": "Meta mise à jour",
                    "deleted": "Meta supprimée",
                    "bulk_destroyed": "Metas sélectionnées supprimées"
                },
                "form_submissions": {
                    "deleted": "Soumission supprimée",
                    "bulk_destroyed": "Soumissions sélectionnées supprimées"
                },
                "form_settings": {
                    "created": "Paramétrage de formulaire créé",
                    "updated": "Paramétrage de formulaire mis à jour",
                    "deleted": "Paramétrage de formulaire supprimé"
                },
                "redirections": {
                    "created": "Redirection créée",
                    "updated": "Redirection mise à jour",
                    "deleted": "Redirection supprimée",
                    "bulk_destroyed": "Redirections sélectionnées supprimées",
                    "bulk_enabled": "Redirections sélectionnées activées",
                    "bulk_disabled": "Redirections sélectionnées désactivées",
                    "file_imported": "Fichier importé avec succès"
                },
                "posts": {
                    "created": "Article créé",
                    "updated": "Article mis à jour",
                    "deleted": "Article supprimé",
                    "bulk_destroyed": "Articles sélectionnés supprimés",
                    "bulk_published": "Articles sélectionnés publiés",
                    "bulk_pending": "Articles sélectionnés en attente de modération",
                    "bulk_pinned": "Articles sélectionnés épinglé",
                    "bulk_promoted": "Articles sélectionnés mis en avant"
                },
                "actions": {
                    "invalid": "Action invalide"
                }
            },
            "frontend": []
        },
        "auth": {
            "failed": "Ces identifiants ne correspondent pas à nos enregistrements",
            "throttle": "Trop de tentatives de connexion. Veuillez essayer de nouveau dans {seconds} secondes."
        },
        "buttons": {
            "cancel": "Annuler",
            "save": "Sauvegarder",
            "close": "Fermer",
            "create": "Créer",
            "delete": "Supprimer",
            "confirm": "Valider",
            "show": "Voir",
            "edit": "Editer",
            "update": "Mettre à jour",
            "view": "Voir",
            "preview": "Prévisualiser",
            "back": "Retour",
            "send": "Envoyer",
            "login-as": "Se loguer en tant que {name}",
            "apply": "Appliquer",
            "users": {
                "create": "Créer un utilisateur"
            },
            "roles": {
                "create": "Créer un rôle"
            },
            "metas": {
                "create": "Créer une meta"
            },
            "form_settings": {
                "create": "Créer un paramètre"
            },
            "redirections": {
                "create": "Créer une redirection",
                "import": "Importer le CSV\/Excel"
            },
            "posts": {
                "create": "Créer un article",
                "save_and_publish": "Enregistrer et publier",
                "save_as_draft": "Enregistrer en tant que brouillon"
            }
        },
        "exceptions": {
            "general": "Erreur serveur",
            "unauthorized": "Action non autorisée",
            "backend": {
                "users": {
                    "create": "Erreur lors de la création de l'utilisateur",
                    "update": "Erreur lors de la mise à jour de l'utilisateur",
                    "delete": "Erreur lors de la suppression de l'utilisateur",
                    "first_user_cannot_be_edited": "Vous ne pouvez pas éditer l'utilisateur super admin",
                    "first_user_cannot_be_disabled": "L'utilisateur super admin ne peut pas être désactivé",
                    "first_user_cannot_be_destroyed": "L'utilisateur super admin ne peut pas être supprimé",
                    "first_user_cannot_be_impersonated": "L'utilisateur super admin ne peut pas être usurpé",
                    "cannot_set_superior_roles": "Vous ne pouvez pas attribuer de rôle supérieur au vôtre"
                },
                "roles": {
                    "create": "Erreur lors de la création du rôle",
                    "update": "Erreur lors de la mise à jour du rôle",
                    "delete": "Erreur lors de la suppression du rôle"
                },
                "metas": {
                    "create": "Erreur lors de la création de la meta",
                    "update": "Erreur lors de la mise à jour de la meta",
                    "delete": "Erreur lors de la suppression de la meta",
                    "already_exist": "Il existe déjà une meta pour cette route"
                },
                "form_submissions": {
                    "create": "Erreur lors de la création de la soumission",
                    "delete": "Erreur lors de la suppression de la soumission"
                },
                "form_settings": {
                    "create": "Erreur lors de la création du paramètre de formulaire",
                    "update": "Erreur lors de la mise à jour du paramètre de formulaire",
                    "delete": "Erreur lors de la suppression du paramètre de formulaire",
                    "already_exist": "Il existe déjà un paramétrage pour ce formulaire"
                },
                "redirections": {
                    "create": "Erreur lors de la création de la redirection",
                    "update": "Erreur lors de la mise à jour de la redirection",
                    "delete": "Erreur lors de la suppression de la redirection",
                    "already_exist": "Il existe déjà une redirection pour ce chemin"
                },
                "posts": {
                    "create": "Erreur lors de la création de l'article",
                    "update": "Erreur lors de la mise à jour de l'article",
                    "save": "Erreur lors de l'enregistrement de l'article",
                    "delete": "Erreur lors de la suppression de l'article"
                }
            },
            "frontend": {
                "user": {
                    "email_taken": "Cet email est déjà utilisé par un compte existant.",
                    "password_mismatch": "L'ancien mot de passe est incorrect.",
                    "delete_account": "Erreur lors de la suppression de votre compte.",
                    "updating_disabled": "La modification de compte est désactivée."
                },
                "auth": {
                    "registration_disabled": "L'enregistrement d'utilisateurs est désactivé."
                }
            }
        },
        "forms": {
            "contact": {
                "display_name": "Formulaire de contact"
            }
        },
        "labels": {
            "language": "Langue",
            "actions": "Actions",
            "general": "Général",
            "no_results": "Aucun résultat trouvé",
            "search": "Rechercher",
            "validate": "Valider",
            "choose_file": "Sélectionner un fichier",
            "no_file_chosen": "Aucun fichier sélectionné",
            "are_you_sure": "Etes-vous sûr ?",
            "yes": "Oui",
            "no": "Non",
            "add_new": "Ajouter",
            "export": "Exporter",
            "more_info": "Plus d'info",
            "last_access_at": "Dernier accès le",
            "author": "Auteur",
            "published_at": "Publié le",
            "created_at": "Créé le",
            "updated_at": "Modifié le",
            "deleted_at": "Supprimé le",
            "no_value": "Aucune valeur",
            "upload_image": "Transférer une image",
            "all_rights_reserved": "Tous droits réservés.",
            "datatables": {
                "no_results": "Aucun résultat trouvé",
                "no_matched_results": "Aucun résultat correspondant à votre recherche",
                "show_per_page": "Afficher",
                "entries_per_page": "éléments par page",
                "search": "Rechercher",
                "infos": "Affichage de l'élément {offset_start} à {offset_end} sur {total} éléments"
            },
            "morphs": {
                "post": "Article, identifiant {id}",
                "user": "Utilisateur, identifiant {id}"
            },
            "auth": {
                "disabled": "Votre compte a été désactivé."
            },
            "http": {
                "403": {
                    "title": "Accès non autorisé",
                    "description": "Désolé, mais vous n'avez pas les permissions pour accéder à cette page."
                },
                "404": {
                    "title": "Page introuvable",
                    "description": "Désolé, mais la page à laquelle vous tentez d'accéder n'existe pas."
                },
                "500": {
                    "title": "Erreur serveur",
                    "description": "Désolé, mais le serveur a rencontré une erreur non prévue. Nous la fixerons dès que possible."
                }
            },
            "localization": {
                "en": "Anglais",
                "fr": "Français"
            },
            "placeholders": {
                "route": "Sélectionner une route interne valide",
                "tags": "Sélectionner ou créer une étiquette"
            },
            "cookieconsent": {
                "message": "En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies afin de réaliser des statistiques de visites.",
                "dismiss": "J'ai compris !"
            },
            "descriptions": {
                "allowed_image_types": "Extensions autorisés: png gif jpg jpeg."
            },
            "user": {
                "dashboard": "Tableau de bord",
                "remember": "Se souvenir",
                "login": "Connexion",
                "logout": "Déconnexion",
                "password_forgot": "Mot de passe oublié ?",
                "send_password_link": "Envoyer le mot de passe de réinitialisation",
                "password_reset": "Réinitialisation du mot de passe",
                "register": "S'inscrire",
                "space": "Mon espace",
                "settings": "Paramètres",
                "account": "Mon compte",
                "profile": "Mon profil",
                "avatar": "Avatar",
                "online": "En ligne",
                "edit_profile": "Mettre à jour mon profil",
                "change_password": "Changer mon mot de passe",
                "delete": "Supprimer mon compte",
                "administration": "Administration",
                "member_since": "Membre depuis le {date}",
                "profile_updated": "Profil modifié avec succès.",
                "password_updated": "Mot de passe modifié avec succès.",
                "email_confirmation_sended": "Mail de confirmation envoyé.",
                "email_confirmed": "Email confirmé avec succès.",
                "super_admin": "Super admin",
                "account_delete": "<p>Cette action supprimera définitivement votre compte de ce site ainsi que toutes vos données associées.<\/p>",
                "account_deleted": "Compte supprimé avec succès",
                "titles": {
                    "space": "Mon espace",
                    "account": "Mon compte"
                }
            },
            "alerts": {
                "login_as": "Vous êtes actuellement connecté en tant que <strong>{name}<\/strong>, vous pouvez à tout moment vous reconnecter en tant que <a href=\"{route}\">{admin}<\/a>.",
                "not_confirmed": "Votre compte sera en mode limité tant que votre email ne sera pas confirmé. <a href=\"{route}\">Cliquez ici<\/a> pour relancer l'envoie du mail de confirmation."
            },
            "backend": {
                "dashboard": {
                    "new_posts": "Nouveaux articles",
                    "pending_posts": "Articles en attente de publication",
                    "published_posts": "Articles publiés",
                    "active_users": "Utilisateurs actifs",
                    "form_submissions": "Soumissions",
                    "last_posts": "Dernier articles",
                    "last_published_posts": "Dernières publications",
                    "last_pending_posts": "Derniers articles en attente de publication",
                    "last_new_posts": "Derniers nouveaux articles",
                    "all_posts": "Voir tous les articles"
                },
                "new_menu": {
                    "post": "Nouvel article",
                    "form_setting": "Nouveau paramétrage de formulaire",
                    "user": "Nouvel utilisateur",
                    "role": "Nouveau rôle",
                    "meta": "Nouvelle meta",
                    "redirection": "Nouvelle redirection"
                },
                "sidebar": {
                    "content": "Gestion de contenu",
                    "forms": "Gestion des formulaires",
                    "access": "Gestion des accès",
                    "seo": "Paramétrages SEO"
                },
                "titles": {
                    "dashboard": "Tableau de bord"
                },
                "users": {
                    "titles": {
                        "main": "Gestion des utilisateurs",
                        "index": "Liste des utilisateurs",
                        "create": "Créer un utilisateur",
                        "edit": "Editer un utilisateur"
                    },
                    "actions": {
                        "destroy": "Supprimer les utilisateurs sélectionnés",
                        "enable": "Activer les utilisateurs sélectionnés",
                        "disable": "Désactiver les utilisateurs sélectionnés"
                    }
                },
                "roles": {
                    "titles": {
                        "main": "Gestion des rôles",
                        "index": "Liste des rôles",
                        "create": "Créer un rôle",
                        "edit": "Editer un rôle"
                    }
                },
                "metas": {
                    "titles": {
                        "main": "Gestion des metas",
                        "index": "Liste des metas",
                        "create": "Créer une meta",
                        "edit": "Editer une meta"
                    },
                    "actions": {
                        "destroy": "Supprimer les metas sélectionnés"
                    }
                },
                "form_submissions": {
                    "titles": {
                        "main": "Gestion des soumissions",
                        "index": "Liste des soumissions",
                        "show": "Détail de la soumission"
                    },
                    "actions": {
                        "destroy": "Supprimer les soumissions sélectionnées"
                    }
                },
                "form_settings": {
                    "titles": {
                        "main": "Paramètres de formulaire",
                        "index": "Liste des paramètres de formulaire",
                        "create": "Création d'un paramètre de formulaire",
                        "edit": "Edition d'un paramètre de formulaire"
                    },
                    "descriptions": {
                        "recipients": "Exemple: 'webmaster@example.com' or 'sales@example.com,support@example.com' . Pour déclarer des destinataires multiples, séparer chaque adresse par une virgule.",
                        "message": "Le message à afficher après la soumission de ce formulaire. Laissez vide pour n'afficher aucun message."
                    }
                },
                "redirections": {
                    "titles": {
                        "main": "Gestion des redirections",
                        "index": "Liste des redirections",
                        "create": "Création d'une redirection",
                        "edit": "Modification d'une redirection"
                    },
                    "actions": {
                        "destroy": "Supprimer les redirections sélectionnées",
                        "enable": "Activer les redirections sélectionnées",
                        "disable": "Désactiver les redirections sélectionnées"
                    },
                    "types": {
                        "permanent": "Redirection permanente (301)",
                        "temporary": "Redirection temporaire (302)"
                    },
                    "import": {
                        "title": "Import de fichier CSV\/Excel",
                        "label": "Sélectionner un fichier CSV\/Excel à importer",
                        "description": "Le fichier doit avoir 2 colonnes avec en-têtes de colonne \"source\" et \"target\", la redirection sera du type permanent par défaut"
                    }
                },
                "posts": {
                    "statuses": {
                        "draft": "Brouillon",
                        "pending": "En attente",
                        "published": "Publié"
                    },
                    "titles": {
                        "main": "Gestion des articles",
                        "index": "Liste des articles",
                        "create": "Créer un article",
                        "edit": "Editer un article",
                        "publication": "Options de publication"
                    },
                    "actions": {
                        "destroy": "Supprimer les articles sélectionnés",
                        "publish": "Publier les articles sélectionnés",
                        "pin": "Epingler les articles sélectionnés",
                        "promote": "Mettre en avant les articles sélectionnés"
                    },
                    "descriptions": {
                        "meta_title": "Si vide, le titre par défaut sera celui de l'article.",
                        "meta_description": "Si vide, la description par défaut sera le résumé de l'article."
                    },
                    "placeholders": {
                        "body": "Saisissez votre contenu...",
                        "meta_title": "Titre de l'article.",
                        "meta_description": "Résumé de l'article."
                    }
                }
            },
            "frontend": {
                "titles": {
                    "home": "Accueil",
                    "about": "Qui sommes-nous ?",
                    "contact": "Contact",
                    "blog": "Blog",
                    "message_sent": "Message envoyé",
                    "legal_mentions": "Mention légales",
                    "administration": "Administration"
                },
                "submissions": {
                    "message_sent": "<p>Votre demande de contact a bien été envoyée<\/p>"
                },
                "placeholders": {
                    "locale": "Sélectionnez votre langue",
                    "timezone": "Sélectionnez votre fuseau horaire"
                },
                "blog": {
                    "published_at": "Publié le {date}",
                    "published_at_with_owner_linkable": "Publié le {date} par <a href=\"{link}\">{name}<\/a>",
                    "tags": "Tags"
                }
            }
        },
        "logs": {
            "backend": {
                "users": {
                    "created": "Utilisateur ID {user} créé",
                    "updated": "Utilisateur ID {user} mis à jour",
                    "deleted": "Utilisateur ID {user} supprimé"
                },
                "form_submissions": {
                    "created": "Soumission de formulaire ID {form_submission} créée"
                }
            },
            "frontend": []
        },
        "mails": {
            "layout": {
                "hello": "Bonjour !",
                "regards": "Cordialement",
                "trouble": "Si vous rencontrer un problème en cliquant sur le bouton {action}, copier et coller l'URL suivante dans votre navigateur :",
                "all_rights_reserved": "Tous droits réservés."
            },
            "password_reset": {
                "subject": "Réinitialisation de mon mot de passe",
                "intro": "Vous recevez cet email car vous avez effectué une demande de réinitialisation de mot de passe.",
                "action": "Réinitialiser le mot de passe",
                "outro": "Si vous n'avez pas fait cette demande de réinitialisation, aucune action n'est requise."
            },
            "email_confirmation": {
                "subject": "Confirmation de mon email",
                "intro": "La confirmation de votre email est requise pour débrider votre compte.",
                "action": "Confirmer mon email",
                "outro": "Votre compte sera limité tant que votre email ne sera pas confirmé."
            },
            "contact": {
                "subject": "Nouveau message de contact",
                "new_contact": "Vous avez reçu un nouveau message de contact. Détail de la soumission :"
            },
            "alert": {
                "subject": "[{app_name}] Exception error",
                "message": "Une exception serveur non prévue a été levée dont le message est : {message}.",
                "trace": "Trace complète :"
            }
        },
        "pagination": {
            "previous": "&laquo; Précédent",
            "next": "Suivant &raquo;"
        },
        "passwords": {
            "password": "Les mots de passe doivent contenir au moins six caractères et doivent être identiques.",
            "reset": "Votre mot de passe a été réinitialisé !",
            "sent": "Nous vous avons envoyé par courriel le lien de réinitialisation du mot de passe !",
            "token": "Ce jeton de réinitialisation du mot de passe n'est pas valide.",
            "user": "Aucun utilisateur n'a été trouvé avec cette adresse e-mail."
        },
        "permissions": {
            "categories": {
                "blog": "Blog",
                "form": "Formulaires",
                "access": "Accès",
                "seo": "SEO"
            },
            "access": {
                "backend": {
                    "display_name": "Accès au backoffice",
                    "description": "Permet l'accès aux pages du backoffice."
                },
                "all": {
                    "backend": {
                        "display_name": "Accès complet à l'interface du backoffice",
                        "description": "Déverrouille entièrement l'IHM du BO. Les permissions côté serveur resteront inchangées. Utile notamment pour les comptes de démo ou tests de permissions côté serveur."
                    }
                }
            },
            "view": {
                "form_settings": {
                    "display_name": "Voir les paramètres de formulaires",
                    "description": "Peut voir des paramètres de formulaires."
                },
                "form_submissions": {
                    "display_name": "Voir les soumissions de formulaire",
                    "description": "Peut voir des soumissions de formulaire."
                },
                "users": {
                    "display_name": "Voir les utilisateurs",
                    "description": "Peut voir des utilisateurs."
                },
                "roles": {
                    "display_name": "Voir les rôles",
                    "description": "Peut voir des rôles."
                },
                "metas": {
                    "display_name": "Voir les metas",
                    "description": "Peut voir des metas."
                },
                "redirections": {
                    "display_name": "Voir les redirections",
                    "description": "Peut voir des redirections."
                },
                "posts": {
                    "display_name": "Voir tous les articles",
                    "description": "Peut voir l'ensemble des articles."
                },
                "own": {
                    "posts": {
                        "display_name": "Voir ses propres articles",
                        "description": "Peut voir ses propres articles."
                    }
                }
            },
            "create": {
                "form_settings": {
                    "display_name": "Créer les paramètres de formulaires",
                    "description": "Peut créer des paramètres de formulaires."
                },
                "users": {
                    "display_name": "Créer les utilisateurs",
                    "description": "Peut créer des utilisateurs."
                },
                "roles": {
                    "display_name": "Créer les rôles",
                    "description": "Peut créer des rôles."
                },
                "metas": {
                    "display_name": "Créer les metas",
                    "description": "Peut créer des metas."
                },
                "redirections": {
                    "display_name": "Créer les redirections",
                    "description": "Peut créer des redirections."
                },
                "posts": {
                    "display_name": "Créer les articles",
                    "description": "Peut créer des articles."
                }
            },
            "edit": {
                "form_settings": {
                    "display_name": "Modifier les paramètres de formulaires",
                    "description": "Peut modifier des paramètres de formulaires."
                },
                "users": {
                    "display_name": "Modifier les utilisateurs",
                    "description": "Peut modifier des utilisateurs."
                },
                "roles": {
                    "display_name": "Modifier les rôles",
                    "description": "Peut modifier des rôles."
                },
                "metas": {
                    "display_name": "Modifier les metas",
                    "description": "Peut modifier des metas."
                },
                "redirections": {
                    "display_name": "Modifier les redirections",
                    "description": "Peut modifier des redirections."
                },
                "posts": {
                    "display_name": "Modifier tous les articles",
                    "description": "Peut modifier l'ensemble des articles."
                },
                "own": {
                    "posts": {
                        "display_name": "Modifier ses propres articles",
                        "description": "Peut modifier ses propres articles."
                    }
                }
            },
            "delete": {
                "form_settings": {
                    "display_name": "Supprimer les paramètres de formulaires",
                    "description": "Peut supprimer des paramètres de formulaires."
                },
                "form_submissions": {
                    "display_name": "Supprimer les soumissions de formulaire",
                    "description": "Peut supprimer des soumissions de formulaire."
                },
                "users": {
                    "display_name": "Supprimer les utilisateurs",
                    "description": "Peut supprimer des utilisateurs."
                },
                "roles": {
                    "display_name": "Supprimer les rôles",
                    "description": "Peut supprimer des rôles."
                },
                "metas": {
                    "display_name": "Supprimer les metas",
                    "description": "Peut supprimer des metas."
                },
                "redirections": {
                    "display_name": "Supprimer les redirections",
                    "description": "Peut supprimer des redirections."
                },
                "posts": {
                    "display_name": "Supprimer tous les articles",
                    "description": "Peut supprimer l'ensemble des articles."
                },
                "own": {
                    "posts": {
                        "display_name": "Supprimer ses propres articles",
                        "description": "Peut supprimer ses propres articles."
                    }
                }
            },
            "publish": {
                "posts": {
                    "display_name": "Publier les articles",
                    "description": "Possibilité de gérer la publication des articles."
                }
            },
            "impersonate": {
                "display_name": "Usurpation d'utilisateur",
                "description": "Permet de prendre l'identité d'un autre utilisateur. Utile pour les tests."
            }
        },
        "routes": {
            "home": "accueil",
            "about": "qui-sommes-nous",
            "contact": "demande-de-contact",
            "contact-sent": "message-envoyee",
            "legal-mentions": "mentions-legales",
            "redactors": "blog\/redacteurs\/{user}"
        },
        "validation": {
            "accepted": "Le champ {attribute} doit être accepté.",
            "active_url": "Le champ {attribute} n'est pas une URL valide.",
            "after": "Le champ {attribute} doit être une date postérieure au {date}.",
            "after_or_equal": "Le champ {attribute} doit être une date postérieure ou égal au {date}.",
            "alpha": "Le champ {attribute} doit seulement contenir des lettres.",
            "alpha_dash": "Le champ {attribute} doit seulement contenir des lettres, des chiffres et des tirets.",
            "alpha_num": "Le champ {attribute} doit seulement contenir des chiffres et des lettres.",
            "array": "Le champ {attribute} doit être un tableau.",
            "before": "Le champ {attribute} doit être une date antérieure au {date}.",
            "before_or_equal": "Le champ {attribute} doit être une date antérieure ou égal au {date}.",
            "between": {
                "numeric": "La valeur de {attribute} doit être comprise entre {min} et {max}.",
                "file": "La taille du fichier de {attribute} doit être comprise entre {min} et {max} kilo-octets.",
                "string": "Le texte {attribute} doit contenir entre {min} et {max} caractères.",
                "array": "Le tableau {attribute} doit contenir entre {min} et {max} éléments."
            },
            "boolean": "Le champ {attribute} doit être vrai ou faux.",
            "confirmed": "Le champ de confirmation {attribute} ne correspond pas.",
            "date": "Le champ {attribute} n'est pas une date valide.",
            "date_format": "Le champ {attribute} ne correspond pas au format {format}.",
            "different": "Les champs {attribute} et {other} doivent être différents.",
            "digits": "Le champ {attribute} doit contenir {digits} chiffres.",
            "digits_between": "Le champ {attribute} doit contenir entre {min} et {max} chiffres.",
            "dimensions": "La taille de l'image {attribute} n'est pas conforme.",
            "distinct": "Le champ {attribute} a une valeur dupliquée.",
            "email": "Le champ {attribute} doit être une adresse e-mail valide.",
            "exists": "Le champ {attribute} sélectionné est invalide.",
            "file": "Le champ {attribute} doit être un fichier.",
            "filled": "Le champ {attribute} doit avoir une valeur.",
            "image": "Le champ {attribute} doit être une image.",
            "in": "Le champ {attribute} est invalide.",
            "in_array": "Le champ {attribute} n'existe pas dans {other}.",
            "integer": "Le champ {attribute} doit être un entier.",
            "ip": "Le champ {attribute} doit être une adresse IP valide.",
            "ipv4": "Le champ {attribute} doit être une adresse IPv4 valide.",
            "ipv6": "Le champ {attribute} doit être une adresse IPv6 valide.",
            "json": "Le champ {attribute} doit être un document JSON valide.",
            "max": {
                "numeric": "La valeur de {attribute} ne peut être supérieure à {max}.",
                "file": "La taille du fichier de {attribute} ne peut pas dépasser {max} kilo-octets.",
                "string": "Le texte de {attribute} ne peut contenir plus de {max} caractères.",
                "array": "Le tableau {attribute} ne peut contenir plus de {max} éléments."
            },
            "mimes": "Le champ {attribute} doit être un fichier de type : {values}.",
            "mimetypes": "Le champ {attribute} doit être un fichier de type : {values}.",
            "min": {
                "numeric": "La valeur de {attribute} doit être supérieure ou égale à {min}.",
                "file": "La taille du fichier de {attribute} doit être supérieure à {min} kilo-octets.",
                "string": "Le texte {attribute} doit contenir au moins {min} caractères.",
                "array": "Le tableau {attribute} doit contenir au moins {min} éléments."
            },
            "not_in": "Le champ {attribute} sélectionné n'est pas valide.",
            "numeric": "Le champ {attribute} doit contenir un nombre.",
            "present": "Le champ {attribute} doit être présent.",
            "regex": "Le format du champ {attribute} est invalide.",
            "required": "Le champ {attribute} est obligatoire.",
            "required_if": "Le champ {attribute} est obligatoire quand la valeur de {other} est {value}.",
            "required_unless": "Le champ {attribute} est obligatoire sauf si {other} est {values}.",
            "required_with": "Le champ {attribute} est obligatoire quand {values} est présent.",
            "required_with_all": "Le champ {attribute} est obligatoire quand {values} est présent.",
            "required_without": "Le champ {attribute} est obligatoire quand {values} n'est pas présent.",
            "required_without_all": "Le champ {attribute} est requis quand aucun de {values} n'est présent.",
            "same": "Les champs {attribute} et {other} doivent être identiques.",
            "size": {
                "numeric": "La valeur de {attribute} doit être {size}.",
                "file": "La taille du fichier de {attribute} doit être de {size} kilo-octets.",
                "string": "Le texte de {attribute} doit contenir {size} caractères.",
                "array": "Le tableau {attribute} doit contenir {size} éléments."
            },
            "string": "Le champ {attribute} doit être une chaîne de caractères.",
            "timezone": "Le champ {attribute} doit être un fuseau horaire valide.",
            "unique": "La valeur du champ {attribute} est déjà utilisée.",
            "uploaded": "Le fichier du champ {attribute} n'a pu être téléchargé.",
            "url": "Le format de l'URL de {attribute} n'est pas valide.",
            "custom": {
                "attribute-name": {
                    "rule-name": "custom-message"
                }
            },
            "attributes": {
                "name": "Nom",
                "display_name": "Nom affiché",
                "username": "Pseudo",
                "email": "Adresse e-mail",
                "first_name": "Prénom",
                "last_name": "Nom",
                "password": "Mot de passe",
                "password_confirmation": "Confirmation du mot de passe",
                "old_password": "Ancien mot de passe",
                "new_password": "Nouveau mot de passe",
                "new_password_confirmation": "Confirmation du nouveau mot de passe",
                "postal_code": "Code postal",
                "city": "Ville",
                "country": "Pays",
                "address": "Adresse",
                "phone": "Téléphone",
                "mobile": "Portable",
                "age": "Age",
                "sex": "Sexe",
                "gender": "Genre",
                "day": "Jour",
                "month": "Mois",
                "year": "Année",
                "hour": "Heure",
                "minute": "Minute",
                "second": "Seconde",
                "title": "Titre",
                "content": "Contenu",
                "description": "Description",
                "summary": "Résumé",
                "excerpt": "Extrait",
                "date": "Date",
                "time": "Heure",
                "available": "Disponible",
                "size": "Taille",
                "roles": "Rôles",
                "permissions": "Permissions",
                "active": "Actif",
                "confirmed": "Confirmé",
                "message": "Message",
                "g-recaptcha-response": "Captcha",
                "locale": "Localisation",
                "route": "Route",
                "url": "Alias URL",
                "form_type": "Type de formulaire",
                "form_data": "Données du formulaire",
                "recipients": "Destinataires",
                "source_path": "Chemin origine",
                "target_path": "Chemin cible",
                "redirect_type": "Type de redirection",
                "timezone": "Fuseau horaire",
                "order": "Ordre d'affichage",
                "image": "Image",
                "status": "Statut",
                "pinned": "Epinglé",
                "promoted": "Mis en avant",
                "body": "Corps",
                "tags": "Etiquettes",
                "published_at": "Publier le",
                "unpublished_at": "Dépublier le",
                "metable_type": "Entité"
            }
        }
    }
}
