import math

amount = 201

for i in range(amount):
    print(f"{(100/(amount-1)*i)}%   {{ background-position: {(i*(100/(amount-1)))}px {(math.sin(math.radians((360/amount)*i))*20)}px; }}")