# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def new_array (hash)
    hash.values.flatten.sort
end
p new_array(us_states)


# Pseudo code:
#Created a method that takes in a hash
#Pulled out the values at each index, got rid of the nested array and sorted them into alphabetical order

# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike 
    attr_accessor :model, :wheels, :speed
    def initialize(model)
        @model = model
        @wheels = 2
        @speed = 0
    end

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{speed} mph"
    end

end

model = Bike.new("Trek")
# puts model.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.


# Pseudo code:
# Created a class called Bike that holds my data
# Defined my setter and getters
# Created a method that holds my expected return of my Bike data

# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike 
    attr_accessor :model, :wheels, :speed
    def initialize(model)
        @model = model
        @wheels = 2
        @speed = 0
    end

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{speed} mph"
    end

    def pedal_faster(num)
        @speed = @speed + num
    end

    def brake(num)
        @speed = [0, @speed - num].max
    end


end

# Pseudo code:
# Copied the code from above
# Added in 2 methods, 1 for accelerating and 1 for decelerating

model.pedal_faster(10)
puts model.speed
# Expected output example: my_bike.pedal_faster(10) => 10

model.pedal_faster(18)
puts model.speed
# Expected output example: my_bike.pedal_faster(18) => 28

model.brake(5)
puts model.speed
# Expected output example: my_bike.brake(5) => 23

model.brake(25)
puts model.speed
# Expected output example: my_bike.brake(25) => 0
