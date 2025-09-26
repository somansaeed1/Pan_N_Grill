const menuData = {
    'special-pizza': {
        name: 'Special Pizza',
        items: [
            { id: 'family-pizza', name: 'Family Pizza', price: 2000, sizes: null },
            { id: 'xlarge-pizza', name: 'X-Large Pizza', price: 2750, sizes: null },
            { id: 'royal-kabab-crust', name: 'Royal Kabab Crust', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'pan-pizza-crust-special', name: 'Pan Pizza Crust Special', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'kabab-crust-pizza', name: 'Kabab Crust Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'cheese-lovers-pizza', name: 'Cheese Lovers Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'chicken-tikka-pizza', name: 'Chicken Tikka Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'chicken-fajita-pizza', name: 'Chicken Fajita Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'afghani-pizza', name: 'Afghani Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } },
            { id: 'kababa-stuff-pizza', name: 'Kababa Stuff Pizza', price: null, sizes: { S: 600, M: 1100, L: 1650 } }
        ]
    },
    'regular-pizza': {
        name: 'Regular Pizza',
        items: [
            { id: 'tikka-pizza', name: 'Tikka Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'fajita-pizza', name: 'Fajita Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'supreme-pizza', name: 'Supreme Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'bar-bq-pizza', name: 'Bar B-Q Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'achari-pizza', name: 'Achari Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'italian-pizza', name: 'Italian Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } },
            { id: 'multi-flavour-pizza', name: 'Multi Flavour Pizza', price: null, sizes: { S: 500, M: 1000, L: 1500 } }
        ]
    },
    'special-shawarmas': {
        name: 'Special Shawarmas',
        items: [
            { id: 'chicken-shawarma', name: 'Chicken Shawarma', price: 200, sizes: null },
            { id: 'achari-shawarma', name: 'Achari Shawarma', price: 200, sizes: null },
            { id: 'malai-roll-shawarma', name: 'Malai Roll Shawarma', price: 250, sizes: null },
            { id: 'zinger-shawarma', name: 'Zinger Shawarma', price: 300, sizes: null },
            { id: 'special-shawarma', name: 'Special Shawarma', price: 250, sizes: null },
            { id: 'grilled-shawarma', name: 'Grilled Shawarma', price: 300, sizes: null },
            { id: 'qe-cheese-roll', name: 'Qe Cheese Roll', price: 250, sizes: null },
            { id: 'nugget-roll-shawarma', name: 'Nugget Roll Shawarma', price: 350, sizes: null },
            { id: 'platter-shawarma', name: 'Platter Shawarma', price: 350, sizes: null },
            { id: 'slice-cheese', name: 'Slice Cheese', price: 350, sizes: null }
        ]
    },
    'pratha-roll': {
        name: 'Pratha Roll',
        items: [
            { id: 'chicken-pratha-roll', name: 'Chicken Pratha Roll', price: 300, sizes: null },
            { id: 'zinger-pratha-roll', name: 'Zinger Pratha Roll', price: 400, sizes: null },
            { id: 'afghani-pratha-roll', name: 'Afghani Pratha Roll', price: 350, sizes: null },
            { id: 'nugget-pratha-roll', name: 'Nugget Pratha Roll', price: 350, sizes: null },
            { id: 'patty-pratha-roll', name: 'Patty Pratha Roll', price: 300, sizes: null },
            { id: 'grill-pratha-roll', name: 'Grill Pratha Roll', price: 350, sizes: null }
        ]
    },
    'chorizo-burger': {
        name: 'Chorizo Burger',
        items: [
            { id: 'modern-burger', name: 'Modern Burger', price: 450, sizes: null },
            { id: 'zinger-burger', name: 'Zinger Burger', price: 350, sizes: null },
            { id: 'chicken-patty-burger', name: 'Chicken Patty Burger', price: 300, sizes: null },
            { id: 'chapli-burger', name: 'Chapli Burger', price: 250, sizes: null },
            { id: 'sp-kabab-burger', name: 'Sp. Kabab Burger', price: 400, sizes: null },
            { id: 'grill-burger', name: 'Grill Burger', price: 320, sizes: null },
            { id: 'tower-burger', name: 'Tower Burger', price: 450, sizes: null },
            { id: 'jelo-pino-burger', name: 'Jelo Pino Burger', price: 380, sizes: null },
            { id: 'double-decker-cheese-burger', name: 'Double Decker Cheese Burger', price: 500, sizes: null }
        ]
    },
    'fried': {
        name: 'Fried',
        items: [
            { id: 'bake-oven-broast', name: 'Bake Oven Broast', price: 1600, sizes: null },
            { id: 'full-broast', name: 'Full Broast', price: 1600, sizes: null },
            { id: 'half-broast', name: 'Half Broast', price: 800, sizes: null },
            { id: 'quarter-broast', name: 'Quarter Broast (2p)', price: 400, sizes: null },
            { id: 'hot-wings-10', name: 'Hot Wings (10p)', price: 700, sizes: null },
            { id: 'hot-wings-5', name: 'Hot Wings (5p)', price: 350, sizes: null },
            { id: 'nuggets-10', name: 'Nuggets (10p)', price: 600, sizes: null },
            { id: 'nuggets-5', name: 'Nuggets (5p)', price: 300, sizes: null }
        ]
    },
    'pan-n-grill-special': {
        name: 'Pan N Grill Special',
        items: [
            { id: 'pan-grill-sp-platter', name: 'Pan & Grill Sp. Platter', price: 650, sizes: null },
            { id: 'pizza-sandwich', name: 'Pizza Sandwich', price: 550, sizes: null },
            { id: 'pizza-paratha', name: 'Pizza Paratha', price: 500, sizes: null },
            { id: 'cheesy-spring-roll', name: 'Cheesy Spring Roll (4p)', price: 1800, sizes: null },
            { id: 'ch-cheese-garlic-bread', name: 'Ch. Cheese Garlic Bread', price: 500, sizes: null }
        ]
    },
    'rice': {
        name: 'Rice',
        items: [
            { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', price: null, sizes: { S: 400, L: 800 } },
            { id: 'egg-fried-rice', name: 'Egg Fried Rice', price: null, sizes: { S: 350, L: 700 } }
        ]
    },
    'pasta': {
        name: 'Pasta',
        items: [
            { id: 'malai-botti-pasta', name: 'Malai Botti Pasta', price: 600, sizes: null },
            { id: 'crunchy-pasta', name: 'Crunchy Pasta', price: 750, sizes: null },
            { id: 'creamy-cheesy-pasta', name: 'Creamy & Cheesy Pasta', price: 700, sizes: null },
            { id: 'tandoori-pasta', name: 'Tandoori Pasta', price: 700, sizes: null },
            { id: 'hot-spicy-pasta', name: 'Hot & Spicy Pasta', price: 650, sizes: null }
        ]
    },
    'fries-items': {
        name: 'Fries Items',
        items: [
            { id: 'oppo-fries', name: 'Oppo Fries', price: 150, sizes: null },
            { id: 'large-fries', name: 'Large Fries', price: 250, sizes: null },
            { id: 'family-fries', name: 'Family Fries', price: 300, sizes: null }
        ]
    },
    'deals': {
        name: 'Deals',
        items: [
            { id: 'deal-1', name: '2X-Large Pizza + 1.5 Coke', price: 3200, sizes: null },
            { id: 'deal-2', name: '2 Large Pizza + 1.5 Coke', price: 2700, sizes: null },
            { id: 'deal-3', name: '2 Medium Pizza + 1.5 Coke', price: 1800, sizes: null },
            { id: 'deal-4', name: '3 Small Pizza + 1.5 Coke', price: 1500, sizes: null },
            { id: 'deal-5', name: '5 Zinger Burger + 1.5 Coke', price: 1600, sizes: null },
            { id: 'deal-6', name: '1 Cream Pasta + 1 Zinger Burger + 1 Reg. Fries + 1 Ltr Coke', price: 1100, sizes: null },
            { id: 'deal-7', name: '1 Large Pizza + 3 Hot Wings + 5 Nuggets + 2 Zinger Burgers + 1.5 Coke', price: 2500, sizes: null }
        ]
    },
    'cold-coffee': {
        name: 'Cold Coffee',
        items: [
            { id: 'americano', name: 'Americano', price: 300, sizes: null },
            { id: 'crazy-lot-kat', name: 'Crazy Lot-KAT', price: 320, sizes: null },
            { id: 'cookies-cream', name: 'Cookies & Cream', price: 320, sizes: null },
            { id: 'caramel-craves', name: 'Caramel Craves', price: 320, sizes: null }
        ]
    },
    'ice-cream-flavors': {
        name: 'Ice Cream Flavors',
        items: [
            { id: 'vanilla-ice', name: 'Vanilla', price: null, sizes: { S: 120, L: 180 } },
            { id: 'chocolate-chip-ice', name: 'Chocolate Chip', price: null, sizes: { S: 120, L: 180 } },
            { id: 'mango-ice', name: 'Mango', price: null, sizes: { S: 120, L: 180 } },
            { id: 'strawberry-ice', name: 'Strawberry', price: null, sizes: { S: 120, L: 180 } },
            { id: 'caramel-crunch-ice', name: 'Caramel Crunch', price: null, sizes: { S: 140, L: 210 } },
            { id: 'kulfa-ice', name: 'Kulfa', price: null, sizes: { S: 140, L: 210 } },
            { id: 'pista-ice', name: 'Pista', price: null, sizes: { S: 140, L: 210 } }
        ]
    },
    'ice-cream-shake': {
        name: 'Ice Cream Shake',
        items: [
            { id: 'vanilla-shake', name: 'Vanilla Shake', price: 270, sizes: null },
            { id: 'chocolate-shake', name: 'Chocolate Shake', price: 270, sizes: null },
            { id: 'mango-shake', name: 'Mango Shake', price: 270, sizes: null },
            { id: 'strawberry-shake', name: 'Strawberry Shake', price: 270, sizes: null },
            { id: 'caramel-crunch-shake', name: 'Caramel Crunch Shake', price: 270, sizes: null },
            { id: 'kulfa-shake', name: 'Kulfa Shake', price: 290, sizes: null },
            { id: 'pista-shake', name: 'Pista Shake', price: 290, sizes: null }
        ]
    },
    'margaritas': {
        name: "Margarita's",
        items: [
            { id: 'lemonade', name: 'Lemonade', price: 150, sizes: null },
            { id: 'blue-berry-margarita', name: 'Blue Berry Margarita', price: 200, sizes: null },
            { id: 'strawberry-margarita', name: 'Strawberry Margarita', price: 200, sizes: null },
            { id: 'mint-margarita', name: 'Mint Margarita', price: 200, sizes: null },
            { id: 'fresh-lime', name: 'Fresh Lime', price: 150, sizes: null }
        ]
    },
    'yums-shake': {
        name: "Yum's Shake",
        items: [
            { id: 'nutella-fantasy', name: 'Nutella Fantasy', price: 320, sizes: null },
            { id: 'kit-n-bite-shake', name: 'Kit N Bite Shake', price: 270, sizes: null },
            { id: 'cookies-shake', name: 'Cookies Shake', price: 270, sizes: null },
            { id: 'choco-fantasy', name: 'Choco Fantasy', price: 315, sizes: null },
            { id: 'oreo-lover-shake', name: 'Oreo Lover Shake', price: 315, sizes: null },
            { id: 'strawberry-shake', name: 'Strawberry Shake', price: 200, sizes: null },
            { id: 'mango-shake', name: 'Mango Shake', price: 150, sizes: null },
            { id: 'apple-banana-shake', name: 'Apple Banana Shake', price: 150, sizes: null },
            { id: 'banana-shake', name: 'Banana Shake', price: 150, sizes: null },
            { id: 'pineapple-shake', name: 'Pineapple Shake', price: 200, sizes: null },
            { id: 'khoya-khajoor-shake', name: 'Khoya Khajoor Shake', price: 250, sizes: null }                ]
    },
    'tea-coffee': {
        name: 'Tea & Coffee',
        items: [
            { id: 'nescafe-tea', name: 'Nescafe Tea', price: 120, sizes: null },
            { id: 'cappuccino', name: 'Cappuccino', price: 275, sizes: null },
            { id: 'creamy-coffee', name: 'Creamy Coffee', price: 275, sizes: null },
            { id: 'hot-chocolate', name: 'Hot Chocolate', price: 250, sizes: null }
        ]
    },
    'russian-salad': {
        name: 'Russian Salad',
        items: [
            { id: 'russian-salad-cup', name: 'Cup', price: 150, sizes: null },
            { id: 'russian-salad-half', name: '½ L', price: 300, sizes: null },
            { id: 'russian-salad-full', name: '1 L', price: 600, sizes: null }
        ]
    },
    'sauces': {
        name: 'Sauces',
        items: [
            { id: 'chili-garlic-sauce', name: 'Chili Garlic Sauce', price: 50, sizes: null },
            { id: 'hot-sauce', name: 'Hot Sauce', price: 50, sizes: null },
            { id: 'mayonnaise', name: 'Mayonnaise', price: 50, sizes: null },
            { id: 'ketchup', name: 'Ketchup', price: 50, sizes: null }
        ]
    },
    'beverages': {
        name: 'Beverages',
        items: [
            { id: 'coke', name: 'Coke', price: 100, sizes: null },
            { id: 'sprite', name: 'Sprite', price: 100, sizes: null },
            { id: 'fanta', name: 'Fanta', price: 100, sizes: null },
            { id: 'mineral-water', name: 'Mineral Water', price: 50, sizes: null }
        ]
    },
    'juices': {
        name: 'Juices',
        items: [
            { id: 'orange-juice', name: 'Orange Juice', price: 150, sizes: null },
            { id: 'apple-juice', name: 'Apple Juice', price: 150, sizes: null },
            { id: 'mango-juice', name: 'Mango Juice', price: 150, sizes: null },
            { id: 'mixed-fruit-juice', name: 'Mixed Fruit Juice', price: 150, sizes: null }
        ]
    }
};