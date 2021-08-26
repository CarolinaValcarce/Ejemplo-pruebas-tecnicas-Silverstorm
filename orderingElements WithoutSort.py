#Crear una funcion que dado un array ordene todos los elementos del mismo sin usar sort.

def ordered(array):
  for pos_to_fill in range(len(array) - 1, 0, -1):
    pos_max = 0
    for position in range(1, pos_to_fill + 1):
      if array[position] > array[pos_max]:
        pos_max = position

    # Intercambio de elementos
    aux = array[pos_to_fill]
    array[pos_to_fill] = array[pos_max]
    array[pos_max] = aux

l = [1, 25, -3, 20, 30, 10]

ordered(l)
print(l)

