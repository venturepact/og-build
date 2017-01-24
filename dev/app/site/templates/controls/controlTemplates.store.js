"use strict";
exports.ControlTemplates = {
    "logo": {
        "order": 1000,
        "type": "logo",
        "props": {
            "url": "this checkbox section question",
            "width": "100",
            "height": "50"
        },
        "config": {
            "type": "text",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this logo in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "10",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "textfield": {
        "order": 1000,
        "type": "textfield",
        "props": {
            "title": "this checkbox section question",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "text",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this textfield in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "10",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "text-area": {
        "order": 1000,
        "type": "text-area",
        "props": {
            "title": "this checkbox section question",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "text",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this text area in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "10",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "selectbox": {
        "order": 1000,
        "type": "selectbox",
        "props": {
            "title": "this checkbox section question",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "text",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this text area in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "1",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "radio-button": {
        "order": 1001,
        "type": "radio-button",
        "props": {
            "title": "this radio-button section question",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "radio",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this text area in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "1",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "header": {
        "order": 1002,
        "type": "header",
        "props": {
            "title": "this is Header",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "1",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this text area in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "1",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    },
    "click-button": {
        "order": 1003,
        "type": "click-button",
        "props": {
            "title": "Button",
            "helpText": "SOME HELPER TEXT"
        },
        "config": {
            "type": "button",
            "attr": [
                {
                    "class": "customeClass",
                    "style": "heightcolorred"
                }
            ],
            "validations": [
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error"
                },
                {
                    "required": "true",
                    "message": "This field is required",
                    "errorClass": "error",
                    "min": "0",
                    "max": "100"
                }
            ],
            "maxSelections": 1,
            "direction": "horizontal",
            "placeholder": "this text area in placeholder",
            "defaultvalue": "Default Value"
        },
        "options": [
            {
                "type": "toggel",
                "label": "OPTION 1",
                "value": "1",
                "selected": false,
                "icon": "http://test.com/jd.png",
                "attr": {
                    "class": "customeClass",
                    "style": "height:100;color:red;"
                }
            }
        ]
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sVGVtcGxhdGVzLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBVyx3QkFBZ0IsR0FBUTtJQU1qQyxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLGdDQUFnQztZQUN2QyxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBQyxJQUFJO1NBQ2Q7UUFDRCxRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDMUI7YUFDRjtZQUNELGFBQWEsRUFBRTtnQkFDYjtvQkFDRSxVQUFVLEVBQUUsTUFBTTtvQkFDbEIsU0FBUyxFQUFFLHdCQUF3QjtvQkFDbkMsWUFBWSxFQUFFLE9BQU87aUJBQ3RCO2dCQUNEO29CQUNFLFVBQVUsRUFBRSxNQUFNO29CQUNsQixTQUFTLEVBQUUsd0JBQXdCO29CQUNuQyxZQUFZLEVBQUUsT0FBTztvQkFDckIsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRjtZQUNELGVBQWUsRUFBRSxDQUFDO1lBQ2xCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLGFBQWEsRUFBRSwwQkFBMEI7WUFDekMsY0FBYyxFQUFFLGVBQWU7U0FDaEM7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLE9BQU8sRUFBRSx1QkFBdUI7aUJBQ2pDO2FBQ0Y7U0FDRjtLQUNG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RUFBRTtvQkFDTixPQUFPLEVBQUUsY0FBYztvQkFDdkIsT0FBTyxFQUFFLHVCQUF1QjtpQkFDakM7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sVGVtcGxhdGVzLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBDb250cm9sVGVtcGxhdGVzOiBhbnkgPSB7XHJcbi8vIEpzb24gY29uZGl0aW9uc1xyXG4vKlxyXG4gICAtLS0gIEZpZWxkIDogTG9nbyAgICAtLS0tXHJcblxyXG4qL1xyXG4gIFwibG9nb1wiOiB7XHJcbiAgICBcIm9yZGVyXCI6IDEwMDAsXHJcbiAgICBcInR5cGVcIjogXCJsb2dvXCIsXHJcbiAgICBcInByb3BzXCI6IHtcclxuICAgICAgXCJ1cmxcIjogXCJ0aGlzIGNoZWNrYm94IHNlY3Rpb24gcXVlc3Rpb25cIixcclxuICAgICAgXCJ3aWR0aFwiOiBcIjEwMFwiLFxyXG4gICAgICBcImhlaWdodFwiOlwiNTBcIlxyXG4gICAgfSxcclxuICAgIFwiY29uZmlnXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxyXG4gICAgICBcImF0dHJcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21lQ2xhc3NcIixcclxuICAgICAgICAgIFwic3R5bGVcIjogXCJoZWlnaHRjb2xvcnJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInZhbGlkYXRpb25zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJlcnJvckNsYXNzXCI6IFwiZXJyb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBcIm1pblwiOiBcIjBcIixcclxuICAgICAgICAgIFwibWF4XCI6IFwiMTAwXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwibWF4U2VsZWN0aW9uc1wiOiAxLFxyXG4gICAgICBcImRpcmVjdGlvblwiOiBcImhvcml6b250YWxcIixcclxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcInRoaXMgbG9nbyBpbiBwbGFjZWhvbGRlclwiLFxyXG4gICAgICBcImRlZmF1bHR2YWx1ZVwiOiBcIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgfSxcclxuICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJ0b2dnZWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwiT1BUSU9OIDFcIixcclxuICAgICAgICBcInZhbHVlXCI6IFwiMTBcIixcclxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly90ZXN0LmNvbS9qZC5wbmdcIixcclxuICAgICAgICBcImF0dHJcIjoge1xyXG4gICAgICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbWVDbGFzc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImhlaWdodDoxMDA7Y29sb3I6cmVkO1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gICxcclxuXHJcbi8qXHJcbiAgIC0tLSAgRmllbGQgOiB0ZXh0ZmllbGQgICAgLS0tLVxyXG5cclxuKi9cclxuICBcInRleHRmaWVsZFwiOiB7XHJcbiAgICBcIm9yZGVyXCI6IDEwMDAsXHJcbiAgICBcInR5cGVcIjogXCJ0ZXh0ZmllbGRcIixcclxuICAgIFwicHJvcHNcIjoge1xyXG4gICAgICBcInRpdGxlXCI6IFwidGhpcyBjaGVja2JveCBzZWN0aW9uIHF1ZXN0aW9uXCIsXHJcbiAgICAgIFwiaGVscFRleHRcIjogXCJTT01FIEhFTFBFUiBURVhUXCJcclxuICAgIH0sXHJcbiAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcclxuICAgICAgXCJhdHRyXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0Y29sb3JyZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcImVycm9yQ2xhc3NcIjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgXCJtaW5cIjogXCIwXCIsXHJcbiAgICAgICAgICBcIm1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm1heFNlbGVjdGlvbnNcIjogMSxcclxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJ0aGlzIHRleHRmaWVsZCBpbiBwbGFjZWhvbGRlclwiLFxyXG4gICAgICBcImRlZmF1bHR2YWx1ZVwiOiBcIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgfSxcclxuICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJ0b2dnZWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwiT1BUSU9OIDFcIixcclxuICAgICAgICBcInZhbHVlXCI6IFwiMTBcIixcclxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly90ZXN0LmNvbS9qZC5wbmdcIixcclxuICAgICAgICBcImF0dHJcIjoge1xyXG4gICAgICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbWVDbGFzc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImhlaWdodDoxMDA7Y29sb3I6cmVkO1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gICAgICAgICAgICAsXHJcblxyXG4gICAvLyBKc29uIGNvbmRpdGlvbnNcclxuLypcclxuICAgLS0tICBGaWVsZCA6IHRleHRBcmVhICAgLS0tLVxyXG5cclxuKi9cclxuICBcInRleHQtYXJlYVwiOiB7XHJcbiAgICBcIm9yZGVyXCI6IDEwMDAsXHJcbiAgICBcInR5cGVcIjogXCJ0ZXh0LWFyZWFcIixcclxuICAgIFwicHJvcHNcIjoge1xyXG4gICAgICBcInRpdGxlXCI6IFwidGhpcyBjaGVja2JveCBzZWN0aW9uIHF1ZXN0aW9uXCIsXHJcbiAgICAgIFwiaGVscFRleHRcIjogXCJTT01FIEhFTFBFUiBURVhUXCJcclxuICAgIH0sXHJcbiAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcclxuICAgICAgXCJhdHRyXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0Y29sb3JyZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcImVycm9yQ2xhc3NcIjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgXCJtaW5cIjogXCIwXCIsXHJcbiAgICAgICAgICBcIm1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm1heFNlbGVjdGlvbnNcIjogMSxcclxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJ0aGlzIHRleHQgYXJlYSBpbiBwbGFjZWhvbGRlclwiLFxyXG4gICAgICBcImRlZmF1bHR2YWx1ZVwiOiBcIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgfSxcclxuICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJ0b2dnZWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwiT1BUSU9OIDFcIixcclxuICAgICAgICBcInZhbHVlXCI6IFwiMTBcIixcclxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly90ZXN0LmNvbS9qZC5wbmdcIixcclxuICAgICAgICBcImF0dHJcIjoge1xyXG4gICAgICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbWVDbGFzc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImhlaWdodDoxMDA7Y29sb3I6cmVkO1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gICAgICAgICAgLFxyXG5cclxuLy8gSnNvbiBjb25kaXRpb25zXHJcbi8qXHJcbiAgIC0tLSAgRmllbGQgOiBzZWxlY3QgLT4gb3B0aW9ucyAoRHJvcGRvd24pICAgLS0tLVxyXG5cclxuKi9cclxuICBcInNlbGVjdGJveFwiOiB7XHJcbiAgICBcIm9yZGVyXCI6IDEwMDAsXHJcbiAgICBcInR5cGVcIjogXCJzZWxlY3Rib3hcIixcclxuICAgIFwicHJvcHNcIjoge1xyXG4gICAgICBcInRpdGxlXCI6IFwidGhpcyBjaGVja2JveCBzZWN0aW9uIHF1ZXN0aW9uXCIsXHJcbiAgICAgIFwiaGVscFRleHRcIjogXCJTT01FIEhFTFBFUiBURVhUXCJcclxuICAgIH0sXHJcbiAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcclxuICAgICAgXCJhdHRyXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0Y29sb3JyZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcImVycm9yQ2xhc3NcIjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgXCJtaW5cIjogXCIwXCIsXHJcbiAgICAgICAgICBcIm1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm1heFNlbGVjdGlvbnNcIjogMSxcclxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJ0aGlzIHRleHQgYXJlYSBpbiBwbGFjZWhvbGRlclwiLFxyXG4gICAgICBcImRlZmF1bHR2YWx1ZVwiOiBcIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgfSxcclxuICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJ0b2dnZWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwiT1BUSU9OIDFcIixcclxuICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3Rlc3QuY29tL2pkLnBuZ1wiLFxyXG4gICAgICAgIFwiYXR0clwiOiB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0OjEwMDtjb2xvcjpyZWQ7XCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbiAgICAsXHJcbi8vIEpzb24gY29uZGl0aW9uc1xyXG4vKlxyXG4gICAtLS0gIEZpZWxkIDogcmFkaW8gYnV0dG9uICAgIC0tLS1cclxuXHJcbiovXHJcblxyXG4gIFwicmFkaW8tYnV0dG9uXCI6IHtcclxuICAgIFwib3JkZXJcIjogMTAwMSxcclxuICAgIFwidHlwZVwiOiBcInJhZGlvLWJ1dHRvblwiLFxyXG4gICAgLy9cIm5hbWVcIjogXCJyYWRpMVwiLFxyXG4gICAgXCJwcm9wc1wiOiB7XHJcbiAgICBcInRpdGxlXCI6IFwidGhpcyByYWRpby1idXR0b24gc2VjdGlvbiBxdWVzdGlvblwiLFxyXG4gICAgICBcImhlbHBUZXh0XCI6IFwiU09NRSBIRUxQRVIgVEVYVFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb25maWdcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxyXG4gICAgICBcImF0dHJcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21lQ2xhc3NcIixcclxuICAgICAgICAgIFwic3R5bGVcIjogXCJoZWlnaHRjb2xvcnJlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInZhbGlkYXRpb25zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJlcnJvckNsYXNzXCI6IFwiZXJyb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBcIm1pblwiOiBcIjBcIixcclxuICAgICAgICAgIFwibWF4XCI6IFwiMTAwXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwibWF4U2VsZWN0aW9uc1wiOiAxLFxyXG4gICAgICBcImRpcmVjdGlvblwiOiBcImhvcml6b250YWxcIixcclxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcInRoaXMgdGV4dCBhcmVhIGluIHBsYWNlaG9sZGVyXCIsXHJcbiAgICAgIFwiZGVmYXVsdHZhbHVlXCI6IFwiRGVmYXVsdCBWYWx1ZVwiXHJcbiAgICB9LFxyXG4gICAgXCJvcHRpb25zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcInRvZ2dlbFwiLFxyXG4gICAgICAgIFwibGFiZWxcIjogXCJPUFRJT04gMVwiLFxyXG4gICAgICAgIFwidmFsdWVcIjogXCIxXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZSxcclxuICAgICAgICBcImljb25cIjogXCJodHRwOi8vdGVzdC5jb20vamQucG5nXCIsXHJcbiAgICAgICAgXCJhdHRyXCI6IHtcclxuICAgICAgICAgIFwiY2xhc3NcIjogXCJjdXN0b21lQ2xhc3NcIixcclxuICAgICAgICAgIFwic3R5bGVcIjogXCJoZWlnaHQ6MTAwO2NvbG9yOnJlZDtcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuICAgICxcclxuICAvKlxyXG4gICAtLS0gIEZpZWxkIDogSGVhZGVyIChIMikgICAtLS0tXHJcblxyXG4qL1xyXG4gIFwiaGVhZGVyXCI6IHtcclxuICAgIFwib3JkZXJcIjogMTAwMixcclxuICAgIFwidHlwZVwiOiBcImhlYWRlclwiLFxyXG4gICAgXCJwcm9wc1wiOiB7XHJcbiAgICAgIFwidGl0bGVcIjogXCJ0aGlzIGlzIEhlYWRlclwiLFxyXG4gICAgICBcImhlbHBUZXh0XCI6IFwiU09NRSBIRUxQRVIgVEVYVFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb25maWdcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCIxXCIsXHJcbiAgICAgIFwiYXR0clwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbWVDbGFzc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImhlaWdodGNvbG9ycmVkXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmFsaWRhdGlvbnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcImVycm9yQ2xhc3NcIjogXCJlcnJvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgICAgXCJtZXNzYWdlXCI6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgXCJlcnJvckNsYXNzXCI6IFwiZXJyb3JcIixcclxuICAgICAgICAgIFwibWluXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJtYXhcIjogXCIxMDBcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJtYXhTZWxlY3Rpb25zXCI6IDEsXHJcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwidGhpcyB0ZXh0IGFyZWEgaW4gcGxhY2Vob2xkZXJcIixcclxuICAgICAgXCJkZWZhdWx0dmFsdWVcIjogXCJEZWZhdWx0IFZhbHVlXCJcclxuICAgIH0sXHJcbiAgICBcIm9wdGlvbnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwidG9nZ2VsXCIsXHJcbiAgICAgICAgXCJsYWJlbFwiOiBcIk9QVElPTiAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIixcclxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly90ZXN0LmNvbS9qZC5wbmdcIixcclxuICAgICAgICBcImF0dHJcIjoge1xyXG4gICAgICAgICAgXCJjbGFzc1wiOiBcImN1c3RvbWVDbGFzc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImhlaWdodDoxMDA7Y29sb3I6cmVkO1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gICAgLFxyXG4gIC8qXHJcbiAgLS0tICBGaWVsZCA6IEJ1dHRvbiA8YT4gdGFnICAgLS0tLVxyXG5cclxuICovXHJcbiAgXCJjbGljay1idXR0b25cIjoge1xyXG4gICAgXCJvcmRlclwiOiAxMDAzLFxyXG4gICAgXCJ0eXBlXCI6IFwiY2xpY2stYnV0dG9uXCIsXHJcbiAgICBcInByb3BzXCI6IHtcclxuICAgICAgXCJ0aXRsZVwiOiBcIkJ1dHRvblwiLFxyXG4gICAgICBcImhlbHBUZXh0XCI6IFwiU09NRSBIRUxQRVIgVEVYVFwiXHJcbiAgICB9LFxyXG4gICAgXCJjb25maWdcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcclxuICAgICAgXCJhdHRyXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0Y29sb3JyZWRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJ2YWxpZGF0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICAgICAgICAgIFwibWVzc2FnZVwiOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICAgIFwiZXJyb3JDbGFzc1wiOiBcImVycm9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICBcImVycm9yQ2xhc3NcIjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgXCJtaW5cIjogXCIwXCIsXHJcbiAgICAgICAgICBcIm1heFwiOiBcIjEwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcIm1heFNlbGVjdGlvbnNcIjogMSxcclxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJ0aGlzIHRleHQgYXJlYSBpbiBwbGFjZWhvbGRlclwiLFxyXG4gICAgICBcImRlZmF1bHR2YWx1ZVwiOiBcIkRlZmF1bHQgVmFsdWVcIlxyXG4gICAgfSxcclxuICAgIFwib3B0aW9uc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJ0b2dnZWxcIixcclxuICAgICAgICBcImxhYmVsXCI6IFwiT1BUSU9OIDFcIixcclxuICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3Rlc3QuY29tL2pkLnBuZ1wiLFxyXG4gICAgICAgIFwiYXR0clwiOiB7XHJcbiAgICAgICAgICBcImNsYXNzXCI6IFwiY3VzdG9tZUNsYXNzXCIsXHJcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaGVpZ2h0OjEwMDtjb2xvcjpyZWQ7XCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn07XHJcbiJdfQ==
