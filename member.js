function skillsMember() {
    // Path: member.js
    return {
        name: 'skillsMember',
        type: 'member',
        description: 'Skills of a member',
        fields: {
            name: {
                type: 'string',
                description: 'Name of the skill',
            },
            level: {
                type: 'number',
                description: 'Level of the skill',
            },
        },
    };
}