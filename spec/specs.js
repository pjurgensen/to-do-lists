describe('Task', function() {
	describe('displayTask', function() {
		it('displays the name of a task and a brief description', function() {
			var testTask = Object.create(Task);
			testTask.taskName = 'laundry';
			testTask.taskDescription = 'go to laundromat';
			testTask.displayTask().should.equal('laundry: go to laundromat');
		});
	});
});
