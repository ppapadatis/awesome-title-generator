$(document).ready(function () {
    'use strict';

    var titles = ['Senior', 'Mid-Senior', 'Junior', 'Lead', 'Professional', 'Expert', 'Associate', 'Freelance', 'Talented'];

    var fields = ['Web', 'Frontend', 'Backend', 'UI', 'UX', 'QA', 'Mobile', 'Graphic', 'Content', 'Interactive', 'Software',
             'Analytics', 'Marketing', 'Game', 'Art', 'Full-Stack', 'Data', 'Big Data', 'Database', 'Systems',
             'Cloud', 'Business', 'Digital', 'Project', 'Product', 'Account', 'Security', 'Sales', 'Information',
             'Growth', 'Accessibility', 'Technical', 'Agile', 'Service', 'Social Media', 'Transformation', 'Support'];

    var expertises = ['Intergalactic', 'Space', 'Crusader', 'Ninja', 'Master', 'Rockstar', 'Interstellar',
        'Wizard', 'Samurai', 'Jedi', 'Hacker', 'Enthusiast', 'Innovator', 'Evangelist', 'Adventurer'];

    var jobs = ['Architect', 'Specialist', 'Analyst', 'Director', 'Developer', 'Designer', 'Strategist', 'Engineer',
           'Programmer', 'Consultant', 'Technologist', 'SEO', 'CTO', 'CSO', 'Coder', 'Writer', 'Scientist', 'DevOps',
           'IT', 'Administrator', 'Modeler', 'Manager', 'Animator', 'Customer', 'Representative', 'Researcher',
           'Copywriter', 'Storyteller'];

    $(document).on('click', '.button', function () {
        var randomTitle = titles[Math.floor(Math.random() * titles.length)];
        var randomField = fields[Math.floor(Math.random() * fields.length)];
        var randomExpertise = expertises[Math.floor(Math.random() * expertises.length)];
        var randomJob = jobs[Math.floor(Math.random() * jobs.length)];
        $('input[name="title"]').val(randomTitle + ' ' + randomField + ' ' + randomExpertise + ' ' + randomJob);
    });
});
