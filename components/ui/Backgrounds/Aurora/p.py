import turtle

# Screen setup
screen = turtle.Screen()
screen.bgcolor("skyblue")
screen.title("For You Manaswi")

t = turtle.Turtle()
t.speed(0)
turtle.colormode(255)


def draw_petal(size):
    t.begin_fill()
    t.circle(size, 60)
    t.left(120)
    t.circle(size, 60)
    t.left(120)
    t.end_fill()


def draw_leaf(x, y, direction):
    t.penup()
    t.goto(x, y)
    t.setheading(direction)
    t.pendown()
    t.color("green")
    t.fillcolor("green")

    t.begin_fill()
    t.circle(35, 60)
    t.left(120)
    t.circle(35, 60)
    t.left(120)
    t.end_fill()


def draw_sunflower(x, y, petal_size=45):
    # Stem
    t.penup()
    t.goto(x, y - 20)
    t.setheading(-90)
    t.pendown()
    t.color("green")
    t.pensize(8)
    t.forward(180)
    t.pensize(1)

    # Leaves
    draw_leaf(x, y - 90, 40)
    draw_leaf(x, y - 130, 140)

    # Petals
    t.color("gold")
    t.fillcolor("yellow")

    for angle in range(0, 360, 20):
        t.penup()
        t.goto(x, y)
        t.setheading(angle)
        t.forward(30)
        t.pendown()
        draw_petal(petal_size)

    # Center
    t.penup()
    t.goto(x, y - 35)
    t.setheading(0)
    t.pendown()
    t.color("saddlebrown")
    t.fillcolor("saddlebrown")

    t.begin_fill()
    t.circle(35)
    t.end_fill()

    # Seeds
    t.color("black")
    for dot_x in range(-15, 16, 15):
        for dot_y in range(-15, 16, 15):
            t.penup()
            t.goto(x + dot_x, y + dot_y)
            t.pendown()
            t.dot(5)


# Draw five sunflowers
positions = [
    (-280, 80),
    (-140, 120),
    (0, 80),
    (140, 120),
    (280, 80)
]

for x, y in positions:
    draw_sunflower(x, y)

# Message for Manaswi
t.penup()
t.goto(0, -250)
t.color("red")
t.write(
    "For You, Manaswi 🌻",
    align="center",
    font=("Arial", 28, "bold")
)

# t.goto(0, -290)
# t.color("purple")
# t.write(
#     "You are as bright and beautiful as these sunflowers",
#     align="center",
#     font=("Arial", 16, "italic")
# )

t.hideturtle()
screen.mainloop()