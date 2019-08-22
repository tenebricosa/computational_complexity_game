const config = {
    level: "general",
    time: 120000,
    lives: 3
};

//TechTrain

const levels = {
    "general": [{
        "name": "img/content/bubble-sort.gif",
        "answers": [
            "Bubble sort",
            "Bogosort",
            "Быстрая сортировк",
            "Сортировка Шелла",
        ],
        "right": [0],
        "factor": 1
    }, {
        "name": "img/content/quicksort.gif",
        "answers": [
            "Сортировка слиянием",
            "Быстрая сортировка",
            "AVL sort",
            "Блочная сортировка",
        ],
        "right": [1],
        "factor": 1
    }, {
        "name": "img/content/insertion-sort.gif",
        "answers": [
            "Пирамидальная сортировка",
            "Сортировка выбором",
            "Сортировка вставками",
            "Timsort",
        ],
        "right": [2],
        "factor": 1
    }, {
        "name": "img/content/merge-sort.gif",
        "answers": [
            "Heapsort",
            "AVL sort",
            "Timsort",
            "Merge sort",
        ],
        "right": [3],
        "factor": 1 
    }, {
        "name": "img/content/heapsort.gif",
        "answers": [
            "Heapsort",
            "Bucket sort",
            "Tree sort",
            "Топологическая сортировка",
        ],
        "right": [0],
        "factor": 1
    }, {
        "name": "img/content/bogosort.gif",
        "answers": [
            "Timsort",
            "Shotgun sort",
            "Monkey sort",
            "Stupid sort",
        ],
        "right": [1,2,3],
        "factor": 1   
    }, {
        "name": "img/content/selection-sort.gif",
        "answers": [
            "Topological sort",
            "Selection sort",
            "Сортировка вставками",
            "Bogosort",
        ],
        "right": [1],
        "factor": 1
    }, {
        "name": "img/content/sieve-of-eratosthenes.gif",
        "answers": [
            "Решето Сундарама",
            "Lee algorithm",
            "Sieve of Eratosthenes",
            "Алгоритм Евклида",
        ],
        "right": [2],
        "factor": 1  
    }, {
        "name": "img/content/dijkstra-animation.gif",
        "answers": [
            "Вихрь Мерсенна",
            "Алгоритм Краскала",
            "Алгоритм Прима",
            "Алгоритм Дейсткры",
        ],
        "right": [3],
        "factor": 1    
    }, {
        "name": "img/content/mst-kruskal.gif",
        "answers": [
            "Алгоритм Краскала",
            "Алгоритм Дейсткры",
            "Алгоритм Брезенхема",
            "Алгоритм Евклида",
        ],
        "right": [0],
        "factor": 1   
    }, {
        "name": "img/content/dfs.gif",
        "answers": [
            "BFS",
            "DFS",
            "Алгоритм Ли",
            "Градиентный спуск",
        ],
        "right": [1],
        "factor": 1
    }, {
        "name": "img/content/bfs.gif",
        "answers": [
            "Правило одной руки",
            "Градиентный спуск",
            "Поиск в ширину",
            "Алгоритм Ли",
        ],
        "right": [2],
        "factor": 1
    }, {
        "name": "img/content/a.gif",
        "answers": [
            "Поиск в ширину",
            "Волновой алгоритм",
            "Градиентный спуск",
            "Алгоритм A*",
        ],
        "right": [3],
        "factor": 1
    }, {
        "name": "img/content/sequential-search.gif",
        "answers": [
            "Линейный поиск",
            "Последовательный поиск",
            "Интерполяционный поиск",
            "Обратный поиск",
        ],
        "right": [0,1],
        "factor": 1
    }, {
        "name": "img/content/binary-search.gif",
        "answers": [
            "Метод ближайшего соседа",
            "Алгоритм Нарайаны",
            "Двоичный поиск",
            "Дихотомия",
        ],
        "right": [2,3],
        "factor": 1
    }, {
        "name": "img/content/trapezoidal-rule.gif",
        "answers": [
            "Метод трапеций",
            "Метод треугольников",
            "Метод Рунге-Кутта",
            "Метод Монте-Карло",
        ],
        "right": [0],
        "factor": 1
    }, {
        "name": "img/content/lower-riemann.gif",
        "answers": [
            "Метод квадратов",
            "Алгоритм интегрирования прямоугольниками",
            "Метод Чебышёва",
            "Gaussian quadrature",
        ],
        "right": [1],
        "factor": 1
    }, {
        "name": "img/content/simpsons-rule.gif",
        "answers": [
            "Метод Рунге-Кутта",
            "Метод Монте-Карло",
            "Формула Симпсона",
            "Метод Гаусса",
        ],
        "right": [2],
        "factor": 1
    }, {
        "name": "img/content/gauss-legendrea.gif",
        "answers": [
            "Метод Рунге-Кутта",
            "Middle Riemann Sum",
            "Метод Чебышёва",
            "Алгоритм интегрирования Гаусса",
        ],
        "right": [3],
        "factor": 1
    }
]};