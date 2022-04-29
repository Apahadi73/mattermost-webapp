// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {combineReducers} from 'redux';

import {InsightTypes} from 'mattermost-redux/action_types';
import {GenericAction} from 'mattermost-redux/types/actions';
import {TopReaction, TimeFrame, TopChannel} from 'mattermost-redux/types/insights';

const sortReactionsIntoState = (existingState: Record<TimeFrame, Record<string, TopReaction>>, data: TopReaction[], timeFrame: TimeFrame) => {
    if (!existingState || !existingState[timeFrame]) {
        existingState[timeFrame] = {};
    }

    const newItems = {...existingState[timeFrame] || {}};

    for (let i = 0; i < data.length; i++) {
        const emojiObj = data[i];
        newItems[emojiObj.emoji_name] = emojiObj;
    }

    return newItems;
};

const sortChannelsIntoState = (existingState: Record<TimeFrame, Record<string, TopChannel>>, data: TopChannel[], timeFrame: TimeFrame) => {
    if (!existingState || !existingState[timeFrame]) {
        existingState[timeFrame] = {};
    }

    const newItems = {...existingState[timeFrame] || {}};

    for (let i = 0; i < data.length; i++) {
        const insightChannel = data[i];
        newItems[insightChannel.id] = insightChannel;
    }

    return newItems;
};

function topReactions(state: Record<string, Record<TimeFrame, Record<string, TopReaction>>> = {}, action: GenericAction) {
    switch (action.type) {
    case InsightTypes.RECEIVED_TOP_REACTIONS: {
        const reactions = {...(state[action.id] || {})};
        const results = action.data.data.items || [];
        const timeFrame = action.data.timeFrame as TimeFrame;

        const newItems = sortReactionsIntoState(reactions, results, timeFrame);

        return {
            ...state,
            [action.id]: {
                ...(state[action.id] || {}),
                [timeFrame]: newItems,
            },
        };
    }
    default:
        return state;
    }
}

function myTopReactions(state: Record<string, Record<TimeFrame, Record<string, TopReaction>>> = {}, action: GenericAction) {
    switch (action.type) {
    case InsightTypes.RECEIVED_MY_TOP_REACTIONS: {
        const reactions = {...(state[action.id] || {})};
        const results = action.data.data.items || [];
        const timeFrame = action.data.timeFrame as TimeFrame;

        const newItems = sortReactionsIntoState(reactions, results, timeFrame);

        return {
            ...state,
            [action.id]: {
                ...(state[action.id] || {}),
                [timeFrame]: newItems,
            },
        };
    }
    default:
        return state;
    }
}

function topChannels(state: Record<string, Record<TimeFrame, Record<string, TopChannel>>> = {}, action: GenericAction) {
    switch (action.type) {
    case InsightTypes.RECEIVED_TOP_CHANNELS: {
        const channels = {...(state[action.id] || {})};
        const results = action.data.data.items || [];
        const timeFrame = action.data.timeFrame as TimeFrame;

        const newItems = sortChannelsIntoState(channels, results, timeFrame);

        return {
            ...state,
            [action.id]: {
                ...(state[action.id] || {}),
                [timeFrame]: newItems,
            },
        };
    }
    default:
        return state;
    }
}

function myTopChannels(state: Record<string, Record<TimeFrame, Record<string, TopChannel>>> = {}, action: GenericAction) {
    switch (action.type) {
    case InsightTypes.RECEIVED_MY_TOP_CHANNELS: {
        const channels = {...(state[action.id] || {})};
        const results = action.data.data.items || [];
        const timeFrame = action.data.timeFrame as TimeFrame;

        const newItems = sortChannelsIntoState(channels, results, timeFrame);

        return {
            ...state,
            [action.id]: {
                ...(state[action.id] || {}),
                [timeFrame]: newItems,
            },
        };
    }
    default:
        return state;
    }
}

export default combineReducers({

    // Object where every key is the team id, another nested object where the key is TimeFrame and that TimeFrame key has an object of reactions where the key is the emoji_name
    topReactions,

    myTopReactions,

    topChannels,

    myTopChannels,
});
