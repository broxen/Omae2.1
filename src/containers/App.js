/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import PriorityTableComponent from '../components/PriorityTableComponent';
import MetatypeSelector from '../components/MetatypeSelectorComponent';
import AttributesComponent from '../components/AttributesComponent';
import QualityComponent from '../components/QualityComponent';
import MagicSelectionComponent from '../components/magic/MagicSelectionComponent';
import ActiveSkillsComponent from '../components/skills/ActiveSkillsComponent';
import SummaryComponent from '../components/SummaryComponent';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  handleScroll() {
    const {actions} = this;
    let summary = document.getElementById('summary'), sumLoc = summary.getBoundingClientRect();
    if (sumLoc.top < 0) {
      actions.fixSummary({ summaryFix: true });
    } else {
      actions.fixSummary({ summaryFix: false });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this.props));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const {actions, priorityTable, selectMetatype, attributes, selectMagRes, settingSkills, appControl, spellSelect, quality, karma} = this.props,
    karmaTotal = karma - spellSelect.powerPointsKarma;
    return (
      <div className='container' >
				<div className='row'>
					<div className='col-md-12'>
						<Main
              actions={actions}
              priorityTable={priorityTable}
              selectMetatype={selectMetatype}
              attributes={attributes}/>

						<PriorityTableComponent actions={actions.priorityTable} priorityTable={priorityTable}/>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12 col-lg-9'>
						<MetatypeSelector
              priorityRating={priorityTable.metatype}
              metatype={selectMetatype}
              action={actions.selectMetatype}
              karma={actions.karma}/>

						<AttributesComponent
              metatypeRating={priorityTable.metatype}
              priorityRating={priorityTable.attribute}
              magicPriority={priorityTable.magres}
              magictype={selectMagRes}
              metatype={selectMetatype}
              actions={{
                incrementAttribute: actions.incrementAttribute,
                decrementAttribute: actions.decrementAttribute
              }}
              attributes={attributes}/>

            <QualityComponent karma={karmaTotal} actions={actions} selectedQualities={quality}/>

						<MagicSelectionComponent
              magicPriority={priorityTable.magres}
              magictype={selectMagRes}
              magicAttribute={attributes.special}
              selectedSpellsPowers={spellSelect}
              actions={actions}/>

						<h2>Skills</h2>
						<ActiveSkillsComponent
              actions={actions}
              priority={priorityTable}
              skills={settingSkills}
              attributes={attributes}
              metatype={selectMetatype}
              magictype={selectMagRes}/>
					</div>
					<div id='summary' className='col-md-12 col-lg-3'>
						<SummaryComponent
              priority={priorityTable}
              metatype={selectMetatype}
              attributes={attributes}
              magres={selectMagRes}
              spellsAndPowers={spellSelect}
              skills={settingSkills}
              fixed={appControl.summaryFix}
              selectedQualities={quality}
              karma={karmaTotal}/>
					</div>
				</div>
			</div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  priorityTable: PropTypes.object.isRequired,
  selectMetatype: PropTypes.object.isRequired,
  attributes: PropTypes.object.isRequired,
  selectMagRes: PropTypes.string.isRequired,
  settingSkills: PropTypes.object.isRequired,
  appControl: PropTypes.object.isRequired,
  spellSelect: PropTypes.object.isRequired,
  quality: PropTypes.object.isRequired,
  karma: PropTypes.number.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    priorityTable: state.priorityTable,
    selectMetatype: state.selectMetatype,
    attributes: state.attributes,
    selectMagRes: state.selectMagRes,
    settingSkills: state.settingSkills,
    appControl: state.appControl,
    spellSelect: state.spellSelect,
    quality: state.quality,
    karma: state.karma
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    priorityTable: require('../actions/priorityTable.js'),
    selectMetatype: require('../actions/selectMetatype.js'),
    incrementAttribute: require('../actions/attributes/incrementAttribute.js'),
    decrementAttribute: require('../actions/attributes/decrementAttribute.js'),
    incrementAugmented: require('../actions/attributes/incrementAugmented.js'),
    decrementAugmented: require('../actions/attributes/decrementAugmented.js'),
    selectMagictype: require('../actions/selectMagictype.js'),
    incrementSkill: require('../actions/skills/incrementSkill.js'),
    decrementSkill: require('../actions/skills/decrementSkill.js'),
    showSkill: require('../actions/showSkill.js'),
    fixSummary: require('../actions/app/fixSummary.js'),
    incrementSkillgroup: require('../actions/skills/incrementSkillgroup.js'),
    decrementSkillgroup: require('../actions/skills/decrementSkillgroup.js'),
    setSpec: require('../actions/skills/setSpec.js'),
    setMagicSkills: require('../actions/skills/setMagicSkills.js'),
    addSpell: require('../actions/magic/addSpell.js'),
    removeSpell: require('../actions/magic/removeSpell.js'),
    addComplexform: require('../actions/magic/addComplexform.js'),
    removeComplexform: require('../actions/magic/removeComplexform.js'),
    addPower: require('../actions/magic/addPower.js'),
    removePower: require('../actions/magic/removePower.js'),
    raisePower: require('../actions/magic/raisePower.js'),
    lowerPower: require('../actions/magic/lowerPower.js'),
    resetAbility: require('../actions/magic/resetAbility.js'),
    selectQuality: require('../actions/quality/selectQuality.js'),
    removeQuality: require('../actions/quality/removeQuality.js'),
    karma: require('../actions/karma.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
