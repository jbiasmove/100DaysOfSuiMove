module simple_counter::simpleCounter {


   // Struct definition with visibility annotations
   public struct Counter has store {
       value: u64,
   }


   // Function to initialize a new counter
   public fun new(): Counter {
       Counter { value: 0 }
   }


   // Function to increment the counter value
   public fun increment(counter: &mut Counter) {
       counter.value = counter.value + 1;
   }


   // Function to decrement the counter value
   public fun decrement(counter: &mut Counter) {
       counter.value = counter.value - 1;
   }


   // Function to get the current counter value
   public fun get_value(counter: &Counter): u64 {
       counter.value
   }
}
