export const color=[
    "White",
    "Black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value: "white", label:"White"},
            {value: "red", label:"Red"},
            {value: "beige", label:"Beige"},
            {value: "blue", label:"Blue"},
            {value: "brown", label:"Brown"},
            {value: "green", label:"Green"}
        ],
    },
    {
        id:"size",
        name: "Size",
        options:[
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ],
    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", label:"Rs. 159 to Rs. 399"},
            {value:"399=999", label:"Rs. 399 to Rs. 999"},
            {value:"999-1999", label:"Rs. 999 to Rs. 1999"},
            {value:"1999-2999", label:"Rs. 1999 to Rs. 2999"},
            {value:"2999-3999", label:"Rs. 2999 to Rs. 3999"},
        ],
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {
                value: "10",
                label: "10% And Above",
            },
            { value: "20", label:"20 % And Above"},
            { value: "30", label:"30 % And Above"},
            { value: "40", label:"40 % And Above"},
            { value: "50", label:"50 % And Above"},
            { value: "60", label:"60 % And Above"},
            { value: "70", label:"70 % And Above"},
            { value: "80", label:"80 % And Above"},
            
        ],
    },
    {
        id:"stock",
        name:"Avaialability",
        options:[
            {value: "in_stock", label:"In Stock"},
            {value: "out_of_stock", label:"Out Of Stock"},
        ],
    },
]

export const sortOptions=[
    {name:"Price Low To High", query:"price_low", current:false},
    {name:"Price High To Low", query:"price_high", current:false}, 
];