
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('here').addEventListener('change', function() {
            var selectedValue = this.value;
            var StackOneblockOne = document.querySelectorAll('.stack-bar-1 .block-1');
            var StackOneblockTwo = document.querySelectorAll('.stack-bar-1 .block-2');
            var StackOneblockThree = document.querySelectorAll('.stack-bar-1 .block-3');
            var StackTwoblockOne = document.querySelectorAll('.stack-bar-2 .block-1');
            var StackTwoblockTwo = document.querySelectorAll('.stack-bar-2 .block-2');
            var StackTwoblockThree = document.querySelectorAll('.stack-bar-2 .block-3');
            var StackThreeblockOne = document.querySelectorAll('.stack-bar-3 .block-1');
            var StackThreeblockTwo = document.querySelectorAll('.stack-bar-3 .block-2');
            var StackThreeblockThree = document.querySelectorAll('.stack-bar-3 .block-3');

            // Adjust block styles based on selected value
            if (selectedValue === '6') {
                //one
                StackOneblockOne.forEach(function(block) {
                    block.style.height = '35px';
                });

                StackOneblockTwo.forEach(function(block) {
                    block.style.height = '90px';
                });

                StackOneblockThree.forEach(function(block) {
                    block.style.height = '110px';
                });
                //two
                StackTwoblockOne.forEach(function(block) {
                    block.style.height = '50px';
                });

                StackTwoblockTwo.forEach(function(block) {
                    block.style.height = '140px';
                });

                StackTwoblockThree.forEach(function(block) {
                    block.style.height = '45px';
                });
                //three
                StackThreeblockOne.forEach(function(block) {
                    block.style.height = '10px';
                });

                StackThreeblockTwo.forEach(function(block) {
                    block.style.height = '30px';
                });

                StackThreeblockThree.forEach(function(block) {
                    block.style.height = '195px';
                });

            } else if (selectedValue === '12') {
                StackOneblockOne.forEach(function(block) {
                    block.style.height = '75px';
                });

                StackOneblockTwo.forEach(function(block) {
                    block.style.height = '65px';
                });

                StackOneblockThree.forEach(function(block) {
                    block.style.height = '95px';
                });
                //two
                StackTwoblockOne.forEach(function(block) {
                    block.style.height = '30px';
                });

                StackTwoblockTwo.forEach(function(block) {
                    block.style.height = '90px';
                });

                StackTwoblockThree.forEach(function(block) {
                    block.style.height = '115px';
                });
                //three
                StackThreeblockOne.forEach(function(block) {
                    block.style.height = '35px';
                });

                StackThreeblockTwo.forEach(function(block) {
                    block.style.height = '40px';
                });

                StackThreeblockThree.forEach(function(block) {
                    block.style.height = '160px';
                });
                
            } else if (selectedValue === 'all') {
                // Code for 'All time' option
                StackOneblockOne.forEach(function(block) {
                    block.style.height = '80px';
                });

                StackOneblockTwo.forEach(function(block) {
                    block.style.height = '75px';
                });

                StackOneblockThree.forEach(function(block) {
                    block.style.height = '80px';
                });
                //two
                StackTwoblockOne.forEach(function(block) {
                    block.style.height = '50px';
                });

                StackTwoblockTwo.forEach(function(block) {
                    block.style.height = '50px';
                });

                StackTwoblockThree.forEach(function(block) {
                    block.style.height = '135px';
                });
                //three
                StackThreeblockOne.forEach(function(block) {
                    block.style.height = '25px';
                });

                StackThreeblockTwo.forEach(function(block) {
                    block.style.height = '70px';
                });

                StackThreeblockThree.forEach(function(block) {
                    block.style.height = '140px';
                });
            }
        });
    });