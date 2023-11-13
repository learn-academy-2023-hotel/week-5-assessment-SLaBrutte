# ASSESSMENT 5: Coding Critique with AI

# Use AI to learn about the following code.

# Based on your learning, reverse engineer a prompt that this code would satisfy.

# Add comments to each line to explain the code.

# With the data gathered for taco votes. Create a method that totals the number of votes for each kind of taco. Ensure that the data of taco votes is fixed to be downcased.

# Created a variable that holds an array of data for every taco that was voted for
taco_votes = ['fish taco', 'california burrito', 'Tacos Al Pastor', 'Carnitas tacos', 'California burrito', 'Fish taco', 'California Burrito', 'Fish Taco', 'Tacos de Barbacoa', 'tacos Al Pastor', 'fish taco', 'California burrito', 'fish taco', 'tacos al pastor', 'Carnitas tacos', 'Fish taco', 'tacos de barbacoa', 'fish taco', 'Carnitas Tacos', 'carnitas tacos', 'Fish Taco', 'fish taco']

# Created a method and variable that will count the number of times a taco was voted for
# Use the reduce method to create a hash that keeps track of each tacos occurrence
# Downcased everything so all votes match
totals = taco_votes.reduce(Hash.new(0)) do |result, vote|
  result[vote.downcase] += 1
  result
end

p totals