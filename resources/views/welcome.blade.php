<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
    @livewireStyles
    <link rel="stylesheet" href="{{ asset('sass/app.css') }}">
</head>
<body>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9">
            <livewire:users-table />
        </div>
    </div>
</div>



<!-- add user -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <livewire:user-form />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@livewireScripts
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('js/users.js') }}"></script>

</body>
</html>
