Setup instructions:

1. Copy the file 06_state.js into the folder 'basicReactLab/components/samples'.

2. Copy the stories below into 'basicReactLab/stories/samples.stories.js':

        storiesOf("Samples/06 stateful component", module)
        .add("default", () => <CounterState />)
        .add("normal", () => <CounterState jump={3} />)
        .add("error", () => <CounterState jump={"high"} />);

   and add an import at the top:

        import CounterState from "../components/samples/06_state";

3. Use the Storybook UI to test the rendering of the component.