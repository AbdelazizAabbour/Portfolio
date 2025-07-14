<?php if(isset($_POST['send']) && empty($errorMsg)): ?>
    <div id="success-message">
        <div id="success-content">
            <div id="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div id="success-text">
                <h3>Message Sent Successfully!</h3>
                <h6>Thank you for contacting us. We'll get back to you soon.</h6><br><br><br>
            </div>
            <a href="" id="success-button">Go back</a>
        </div>
    </div>

    <style>
        #success-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(218, 165, 32, 0.95);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: successFadeIn 0.5s ease-out;
            max-width: 90%;
            width: 400px;
        }

        #success-content {
            text-align: center;
            color: white;
        }

        #success-icon {
            font-size: 50px;
            margin-bottom: 20px;
        }

        #success-text h3 {
            margin: 0 0 10px;
            font-size: 24px;
        }

        #success-text p {
            margin: 0 0 20px;
            opacity: 0.9;
        }

        #success-button {
            display: inline-block;
            padding: 10px 20px;
            background: white;
            color: rgba(163, 119, 8, 0.95);
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        #success-button:hover {
            background: rgba(100, 72, 1, 0.95);
            color: white;
        }

        @keyframes successFadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    </style>
<?php endif; ?>