"""
Script to initialize the database and create sample data.

This script drops all existing tables, creates new ones, and adds sample data.
"""
from app import create_app, db
from app.models import Project, Sprint, Task, Issue

# Create the application instance
app = create_app()

with app.app_context():
    print('Initializing the database...')
    db.drop_all()
    db.create_all()
    print('Database initialized!')
    
    print('Creating sample data...')
    
    # Create a sample project
    project = Project(
        name='Sample AI Project',
        description='This is a sample AI project for testing the application.',
        requirements='- Python 3.8+\n- TensorFlow 2.0+\n- PyTorch 1.8+'
    )
    db.session.add(project)
    db.session.commit()
    
    # Create sample sprints
    sprint1 = Sprint(
        name='Sprint 1: Planning',
        description='Initial planning and requirements gathering',
        status='Completed',
        project_id=project.id
    )
    
    sprint2 = Sprint(
        name='Sprint 2: Development',
        description='Core development of the AI model',
        status='Active',
        project_id=project.id
    )
    
    sprint3 = Sprint(
        name='Sprint 3: Testing',
        description='Testing and validation of the AI model',
        status='Planned',
        project_id=project.id
    )
    
    db.session.add_all([sprint1, sprint2, sprint3])
    db.session.commit()
    
    # Create sample tasks
    tasks = [
        Task(details='Define project scope', completed=True, sprint_id=sprint1.id),
        Task(details='Gather requirements', completed=True, sprint_id=sprint1.id),
        Task(details='Create project timeline', completed=True, sprint_id=sprint1.id),
        
        Task(details='Set up development environment', completed=True, sprint_id=sprint2.id),
        Task(details='Implement core AI algorithms', completed=False, sprint_id=sprint2.id),
        Task(details='Create data pipeline', completed=False, sprint_id=sprint2.id),
        
        Task(details='Create test cases', completed=False, sprint_id=sprint3.id),
        Task(details='Perform unit testing', completed=False, sprint_id=sprint3.id),
        Task(details='Validate model accuracy', completed=False, sprint_id=sprint3.id)
    ]
    
    # Create sample issues
    issues = [
        Issue(details='Unclear requirements for model accuracy', completed=True, sprint_id=sprint1.id),
        Issue(details='Missing data for training', completed=False, sprint_id=sprint2.id),
        Issue(details='Performance issues with large datasets', completed=False, sprint_id=sprint2.id)
    ]
    
    db.session.add_all(tasks)
    db.session.add_all(issues)
    db.session.commit()
    
    print('Sample data created!')
    print('Database initialization complete!')
