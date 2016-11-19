'use strict';

const NativeAnimatedModule = require('NativeModules').NativeAnimatedModule;
const NavigationCard = require('NavigationCard');
const NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');
const NavigationCardStackStyleInterpolator = require('./NavigationCardStackStyleInterpolator');
const NavigationPropTypes = require('NavigationPropTypes');
const NavigationTransitioner = require('NavigationTransitioner');
const React = require('React');
const StyleSheet = require('StyleSheet');
const View = require('View');
const Color = require('../colors');

const {PropTypes} = React;

import type {
  NavigationState,
  NavigationSceneRenderer,
  NavigationSceneRendererProps,
  NavigationTransitionProps,
} from 'NavigationTypeDefinition';

type Props = {
  navigationState: NavigationState,
  onNavigateBack?: Function,
  renderOverlay: ?NavigationSceneRenderer,
  renderScene: NavigationSceneRenderer,
  cardStyle?: PropTypes.func,
  style: any,
};

type DefaultProps = {
};

/**
 * A controlled navigation view that renders a stack of cards.
 *
 * ```html
 *     +------------+
 *   +-|   Header   |
 * +-+ |------------|
 * | | |            |
 * | | |  Focused   |
 * | | |   Card     |
 * | | |            |
 * +-+ |            |
 *   +-+            |
 *     +------------+
 * ```
 *
 * ## Example
 *
 * ```js
 *
 * class App extends React.Component {
 *   constructor(props, context) {
 *     this.state = {
 *       navigation: {
 *         index: 0,
 *         routes: [
 *           {key: 'page 1'},
 *         },
 *       },
 *     };
 *   }
 *
 *   render() {
 *     return (
 *       <NavigationCardStack
 *         navigationState={this.state.navigation}
 *         renderScene={this._renderScene}
 *       />
 *     );
 *   }
 *
 *   _renderScene: (props) => {
 *     return (
 *       <View>
 *         <Text>{props.scene.route.key}</Text>
 *       </View>
 *     );
 *   };
 * ```
 */
class NavigationCardStack extends React.Component<DefaultProps, Props, void> {
  _render : NavigationSceneRenderer;
  _renderScene : NavigationSceneRenderer;

  static propTypes = {
    /**
     * Custom style applied to the card.
     */
    cardStyle: PropTypes.func,

    /**
     * The controlled navigation state. Typically, the navigation state
     * look like this:
     *
     * ```js
     * const navigationState = {
     *   index: 0, // the index of the selected route.
     *   routes: [ // A list of routes.
     *     {key: 'page 1'}, // The 1st route.
     *     {key: 'page 2'}, // The second route.
     *   ],
     * };
     * ```
     */
    navigationState: NavigationPropTypes.navigationState.isRequired,

    /**
     * Callback that is called when the "back" action is performed.
     * This happens when the back button is pressed or the back gesture is
     * performed.
     */
    onNavigateBack: PropTypes.func,

    /**
     * Function that renders the header.
     */
    renderOverlay: PropTypes.func,

    /**
     * Function that renders the a scene for a route.
     */
    renderScene: PropTypes.func.isRequired,

    /**
     * Custom style applied to the cards stack.
     */
    style: View.propTypes.style,
  };

  static defaultProps: DefaultProps = {
  };

  constructor(props: Props, context: any) {
    super(props, context);
  }

  componentWillMount(): void {
    this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
  }

  render(): React.Element<any> {
    return (
      <NavigationTransitioner
        configureTransition={this._configureTransition}
        navigationState={this.props.navigationState}
        render={this._render}
        style={this.props.style}
      />
    );
  }

  _configureTransition = () => {
    const animationConfig = {};
    if (
      !!NativeAnimatedModule

      // Native animation support also depends on the transforms used:
      // && NavigationCardStackStyleInterpolator.canUseNativeDriver(isVertical)
    ) {
      animationConfig.useNativeDriver = true;
    }
    return animationConfig;
  }

  _render(props: NavigationTransitionProps): React.Element<any> {
    const {
      renderOverlay,
    } = this.props;

    const overlay = renderOverlay ? <View>{renderOverlay(props)}</View> : null;

    const scenes = props.scenes.map(
     scene => this._renderScene({
       ...props,
       scene,
     })
    );

    return (
      <View style={styles.container}>
        <View
          style={styles.scenes}>
          {scenes}
        </View>
        {overlay}
      </View>
    );
  }

  _renderScene(props: NavigationSceneRendererProps): React.Element<any> {
    let thisSceneKey = props.scene.route.key;
    let aboveSceneKey = props.scene.index < (props.scenes.length-1)
      ? props.scenes[props.scene.index+1].route.key
      : null;

    const underlay = aboveSceneKey === 'Settings';
    var style = NavigationCardStackStyleInterpolator.fromRight(props, underlay);
    if (thisSceneKey == 'Settings') {
      style = NavigationCardStackStyleInterpolator.fromLeft(props);
    }

    return (
      <NavigationCard
        {...props}
        key={'card_' + props.scene.key}
        panHandlers={null}
        renderScene={this.props.renderScene}
        style={[style, this.props.cardStyle(thisSceneKey)]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scenes: {
    flex: 1,
  },
});

module.exports = NavigationCardStack;
