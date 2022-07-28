export const mapFields = (options) => {
  let object = {};

  for (let i = 0; i < options.fields.length; i++) {
    const field = [options.fields[i]];

    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }

  return object;
};
