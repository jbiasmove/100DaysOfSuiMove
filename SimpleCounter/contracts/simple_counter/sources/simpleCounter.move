module simple_counter::simpleCounter {
    use sui::tx_context::TxContext;
    use sui::object;
    use sui::transfer;

    // Define a Counter struct as an on-chain object with a UID
    public struct Counter has key, store {
        id: UID,
        value: u64,
    }

    /// Function to create a new Counter object and share it publicly
    public fun create(ctx: &mut TxContext) {
        let counter = Counter {
            id: object::new(ctx),
            value: 0,
        };

        // Make the counter object publicly accessible
        transfer::public_share_object(counter);
    }

    /// Function to increment the counter value
    public fun increment(counter: &mut Counter) {
        counter.value = counter.value + 1;
    }

    /// Function to decrement the counter value (ensuring it doesn’t go negative)
    public fun decrement(counter: &mut Counter) {
        if (counter.value > 0) {
            counter.value = counter.value - 1;
        }
    }

    /// Function to get the current counter value
    public fun get_value(counter: &Counter): u64 {
        counter.value
    }
}
